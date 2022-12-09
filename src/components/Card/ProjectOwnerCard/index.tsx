import { Box, CardActions, CardContent, CardMedia } from "@material-ui/core";

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
					image="https://arbordayblog.org/wp-content/uploads/2016/06/tree.jpg"
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
						{proj.remaining_credits > 0 && (
							<ButtonAsLink
								variant="text"
								to={{
									pathname: `/checkout`,
									query: {
										id: proj.id,
									},
								}}
								text="Buy more credits"
							/>
						)}{" "}
						'
					</CardActions>
				</div>
			</Box>
		</StyledProjectCard>
	);
}
