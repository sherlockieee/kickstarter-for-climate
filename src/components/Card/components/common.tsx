import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Stack from "@mui/material/Stack";

import { Project, ProjectInProfile } from "../../../types/projects";
import { formatCurrency } from "../../../utils/currencyUtils";
import { NextLinkComposed } from "../../Link";
import { ProgressBar } from "./ProgressBar";
import theme from "../../../constants/theme";
type ProjectProps = {
	proj: Project | ProjectInProfile;
};

export const ProjectTitle = ({ proj }: ProjectProps) => (
	<Typography
		variant="h5"
		component={NextLinkComposed}
		to={{ pathname: `/projects/${proj.id}` }}
		style={{ textDecoration: "none" }}
	>
		{proj.title}
	</Typography>
);

export const BackingInfoRow = ({ proj }: ProjectProps) => (
	<div style={{ display: "flex", alignContent: "baseline", gap: "4px" }}>
		<AttachMoneyIcon />
		<Typography component="span" style={{ fontWeight: "bold" }}>
			{formatCurrency({
				value: proj.total_raised,
				currency: proj.currency,
			})}
		</Typography>
		<Typography component="span"> raised by </Typography>
		<Typography component="span">{proj.total_users}</Typography>{" "}
		<Typography component="span">backers</Typography>
	</div>
);

export const DaysLeftRow = ({ proj }: ProjectProps) => (
	<>
		{proj.days_remaining > 0 ? (
			<Typography variant="body2" style={{ display: "flex", gap: 4 }}>
				<AccessTimeIcon />
				{proj.days_remaining} days left
			</Typography>
		) : (
			<Typography
				variant="body2"
				style={{
					display: "flex",
					gap: 4,
					color: theme.palette.info.contrastText,
					opacity: 0.8,
				}}
			>
				<AccessTimeIcon />
				No longer in funding
			</Typography>
		)}
	</>
);

export const CreditPriceRow = ({ proj }: ProjectProps) => (
	<>
		{proj.days_remaining > 0 && (
			<div>
				<Typography variant="h6" component="span">
					{proj.remaining_credits}
				</Typography>
				<Typography component="span"> credits left at </Typography>
				<Typography variant="h6" component="span">
					{formatCurrency({
						value: proj.cost_per_credit,
						currency: proj.currency,
					})}
				</Typography>{" "}
				<Typography component="span">/credit</Typography>
			</div>
		)}
	</>
);
export const TagsRow = ({ proj }: ProjectProps) => (
	<Stack direction="row" spacing={1} style={{ marginTop: 8 }}>
		{proj.tags.map((tag) => (
			<Chip label={tag.name} key={tag.id} color="secondary" />
		))}
	</Stack>
);

export const ProjectHeader = ({ proj }: ProjectProps) => (
	<div
		style={{
			marginBottom: 16,
			display: "flex",
			flexDirection: "column",
			gap: 4,
		}}
	>
		<ProjectTitle proj={proj} />
		<CreditPriceRow proj={proj} />

		<ProgressBar value={proj.percentage_raised} />
		<BackingInfoRow proj={proj} />
		<TagsRow proj={proj} />

		<DaysLeftRow proj={proj} />
	</div>
);
