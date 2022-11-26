import {
	Box,
	Button,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Typography,
} from "@material-ui/core";
import { Stack } from "@mui/system";
import { DateTime } from "luxon";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { styled } from "@mui/material/styles";
import Card, { CardProps } from "@mui/material/Card";

import { formatCurrency } from "../../utils/currencyUtils";
import { NextLinkComposed } from "../Link";
import { ProgressBar } from "../ProgressBar";
import { core } from "../../constants/theme";
import { calculateDaysBetween } from "../../utils/dateUtils";
import { ProjectInProfile } from "../../types/projects";

const StyledProjectCard = styled(Card)<CardProps>(() => ({
	boxShadow: "none",
	"& .MuiTypography-root, .MuiButton-label": {
		color: core.darkGreen,
	},
	padding: "1rem",
}));

export function ProjectProfileCard({ proj }: { proj: ProjectInProfile }) {
	return (
		<StyledProjectCard key={proj.id} raised={false}>
			<Box style={{ display: "flex" }}>
				<CardMedia
					component="img"
					image="https://arbordayblog.org/wp-content/uploads/2016/06/tree.jpg"
					style={{ width: 240 }}
				/>
				<div>
					<CardContent>
						<Stack direction="column" spacing={1}>
							<Typography
								variant="h5"
								component={NextLinkComposed}
								to={{ pathname: `/projects/${proj.id}` }}
								style={{ textDecoration: "none" }}
							>
								{proj.title}
							</Typography>
							<div>
								<Typography variant="h6" component="span">
									{formatCurrency({
										value: proj.total_raised,
										currency: proj.currency,
									})}
								</Typography>
								<Typography component="span">
									{" "}
									raised by{" "}
								</Typography>
								<Typography variant="h6" component="span">
									{proj.total_backers}
								</Typography>{" "}
								<Typography component="span">
									backers
								</Typography>
							</div>
							<ProgressBar
								value={
									(proj.total_raised / proj.funding_needed) *
									100
								}
							/>
							<Typography
								variant="body2"
								style={{ display: "flex", gap: 4 }}
							>
								<AccessTimeIcon />
								{calculateDaysBetween(
									DateTime.now(),
									DateTime.fromISO(proj.end_date)
								)}{" "}
								days left
							</Typography>
							<Stack direction="row" spacing={1}>
								{proj.tags.map((tag) => (
									<Chip
										label={tag.name}
										key={tag.id}
										color="secondary"
									/>
								))}
							</Stack>
							<Typography
								variant="body2"
								style={{ display: "flex", gap: 4 }}
							>
								You have bought {proj.total_credits_bought}{" "}
								credits of this project.
							</Typography>
						</Stack>
					</CardContent>
					<CardActions>
						{proj.credits_sold < proj.total_credits && (
							<Button
								size="medium"
								variant="contained"
								color="primary"
								onClick={() => {}}
							>
								Back project
							</Button>
						)}
					</CardActions>
				</div>
			</Box>
		</StyledProjectCard>
	);
}
