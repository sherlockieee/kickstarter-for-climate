import React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { Project, ProjectsList, Tag } from "../../../types/projects";
import { StyledProjectCard } from "../../../styles/styledProjectCard";

import { getProjects } from "../../../services/projects";
import { ButtonAsLink } from "../../Buttons";
import { ProjectHeader } from "../components/common";

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
					image={proj.image_url}
					style={{ width: 240 }}
				/>
				<div>
					<CardContent>
						<Stack direction="column" spacing={1}>
							<ProjectHeader proj={proj} />
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
						<ButtonAsLink
							variant="text"
							to={{ pathname: `/projects/${proj.id}` }}
							text="Learn more"
						/>
						{proj.remaining_credits > 0 && (
							<ButtonAsLink
								variant="contained"
								to={{
									pathname: `/checkout`,
									query: {
										id: proj.id,
									},
								}}
								text="Back project"
							/>
						)}
					</CardActions>
				</div>
			</Box>
		</StyledProjectCard>
	);
}
