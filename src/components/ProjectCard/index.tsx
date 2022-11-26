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

import { Project, ProjectsList, Tag } from "../../types/projects";
import { formatCurrency } from "../../utils/currencyUtils";
import { NextLinkComposed } from "../Link";
import { ProgressBar } from "../ProgressBar";
import { StyledProjectCard } from "../../styles/styledProjectCard";
import { calculateDaysBetween } from "../../utils/dateUtils";
import { getProjects } from "../../services/projects";

export function ProjectCard({
	proj,
	setProjects,
}: {
	proj: Project;
	setProjects: React.Dispatch<React.SetStateAction<ProjectsList>>;
}) {
	const handleTagClick = async (
		e: React.MouseEvent<HTMLElement>,
		tag: Tag
	) => {
		e.preventDefault();
		const filteredProjects = await getProjects({ tags: [+tag.id] });
		setProjects(filteredProjects);
	};
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
							<Typography variant="h5" component="div">
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
										onClick={(e) => handleTagClick(e, tag)}
									/>
								))}
							</Stack>
							<Typography
								variant="body2"
								paragraph
								style={{
									display: "-webkit-box",
									WebkitLineClamp: 2,
									WebkitBoxOrient: "vertical",
									overflow: "hidden",
								}}
							>
								{proj.description}
							</Typography>
						</Stack>
					</CardContent>
					<CardActions>
						<Button
							size="medium"
							variant="text"
							color="primary"
							component={NextLinkComposed}
							to={{ pathname: `/projects/${proj.id}` }}
						>
							Learn more
						</Button>
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
		</StyledProjectCard>
	);
}
