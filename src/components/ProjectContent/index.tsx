import {
	Box,
	Button,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Divider,
	Typography,
} from "@material-ui/core";
import { Stack } from "@mui/system";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { DateTime } from "luxon";

import { Project } from "../../types/projects";
import { formatCurrency } from "../../utils/currencyUtils";
import { ProgressBar } from "../ProgressBar";
import { calculateDaysBetween } from "../../utils/dateUtils";
import { NextLinkComposed } from "../Link";
import { StyledProjectCard } from "../../styles/styledProjectCard";

export function ProjectContent({ proj }: { proj: Project }) {
	return (
		<StyledProjectCard key={proj.id} raised={false}>
			<Box style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
				<CardMedia
					component="img"
					image="https://arbordayblog.org/wp-content/uploads/2016/06/tree.jpg"
					style={{ width: 240 }}
				/>
				<div>
					<CardContent>
						<Stack direction="column" spacing={1}>
							<Typography
								variant="h2"
								component="div"
								gutterBottom
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
								style={{
									display: "flex",
									gap: 4,
								}}
							>
								<AccessTimeIcon fontSize="small" />
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
						</Stack>
					</CardContent>
					<CardActions>
						{proj.credits_sold < proj.total_credits && (
							<Button
								size="medium"
								variant="contained"
								color="primary"
								component={NextLinkComposed}
								to={{
									pathname: `/checkout`,
									query: {
										id: proj.id,
									},
								}}
							>
								Back project
							</Button>
						)}
					</CardActions>
				</div>
			</Box>
			<Divider />
			<div style={{ marginTop: "1rem" }}>
				<Typography variant="h3" gutterBottom>
					About
				</Typography>
				<Typography variant="body1">{proj.description}</Typography>
			</div>
		</StyledProjectCard>
	);
}
