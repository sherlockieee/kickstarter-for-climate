import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { Project } from "../../../types/projects";
import { StyledProjectCard } from "../../../styles/styledProjectCard";
import { ButtonAsLink } from "../../Buttons";
import { ProjectHeader } from "../../Card/components/common";

export function ProjectOwnerCard({ proj }: { proj: Project }) {
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
						<ProjectHeader proj={proj} />
					</CardContent>
					<CardActions>
						<ButtonAsLink
							variant="contained"
							to={{ pathname: `/transactions/${proj.id}` }}
							text="View all receipts"
						/>
					</CardActions>
				</div>
			</Box>
		</StyledProjectCard>
	);
}
