import {
	Box,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Typography,
} from "@material-ui/core";
import { Stack } from "@mui/system";

import { Project } from "../../../types/projects";
import { StyledProjectCard } from "../../../styles/styledProjectCard";
import { ProjectHeader } from "../components/common";
import { ButtonAsLink } from "../../Buttons";

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
							<ProjectHeader proj={proj} />
						</Stack>
					</CardContent>
					<CardActions>
						{proj.credits_sold < proj.total_credits && (
							<ButtonAsLink
								variant="contained"
								to={{
									pathname: `/checkout`,
									query: {
										id: proj.id,
									},
								}}
								text="Back Project"
							/>
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
