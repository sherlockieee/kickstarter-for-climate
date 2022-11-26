import { Chip, Typography } from "@material-ui/core";
import { DateTime } from "luxon";
import { Project, ProjectInProfile } from "../../../types/projects";
import { formatCurrency } from "../../../utils/currencyUtils";
import { calculateDaysBetween } from "../../../utils/dateUtils";
import { NextLinkComposed } from "../../Link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Stack } from "@mui/system";
import { ProgressBar } from "./ProgressBar";

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
	<div>
		<Typography variant="h6" component="span">
			{formatCurrency({
				value: proj.total_raised,
				currency: proj.currency,
			})}
		</Typography>
		<Typography component="span"> raised by </Typography>
		<Typography variant="h6" component="span">
			{proj.total_backers}
		</Typography>{" "}
		<Typography component="span">backers</Typography>
	</div>
);

export const DaysLeftRow = ({ proj }: ProjectProps) => (
	<Typography variant="body2" style={{ display: "flex", gap: 4 }}>
		<AccessTimeIcon />
		{calculateDaysBetween(
			DateTime.now(),
			DateTime.fromISO(proj.end_date)
		)}{" "}
		days left
	</Typography>
);

export const TagsRow = ({ proj }: ProjectProps) => (
	<Stack direction="row" spacing={1}>
		{proj.tags.map((tag) => (
			<Chip label={tag.name} key={tag.id} color="secondary" />
		))}
	</Stack>
);

export const ProjectHeader = ({ proj }: ProjectProps) => (
	<>
		<ProjectTitle proj={proj} />
		<BackingInfoRow proj={proj} />
		<ProgressBar value={(proj.total_raised / proj.funding_needed) * 100} />
		<DaysLeftRow proj={proj} />
		<TagsRow proj={proj} />
	</>
);
