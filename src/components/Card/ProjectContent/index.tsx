import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

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
					image={proj.image_url}
					style={{ width: 240 }}
				/>
				<div>
					<CardContent>
						<Stack direction="column" spacing={1}>
							<ProjectHeader proj={proj} />
						</Stack>
					</CardContent>
					<CardActions>
						{proj.remaining_credits > 0 && (
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
				<Typography variant="body1" style={{ whiteSpace: "pre-wrap" }}>
					{proj.description}
				</Typography>
			</div>
		</StyledProjectCard>
	);
}
