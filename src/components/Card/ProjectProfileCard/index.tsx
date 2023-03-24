import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { ProjectInProfile } from "../../../types/projects";
import { StyledProjectCard } from "../../../styles/styledProjectCard";
import { ButtonAsLink } from "../../Buttons";
import { ProjectHeader } from "../../Card/components/common";

export function ProjectProfileCard({ proj }: { proj: ProjectInProfile }) {
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
						<Stack direction="column" spacing={1}>
							<Typography variant="body2">
								You have bought{" "}
								<Typography variant="h6" component="span">
									{proj.total_credits_bought}
								</Typography>{" "}
								credits out of{" "}
								<Typography variant="h6" component="span">
									{proj.credits_sold}
								</Typography>{" "}
								total credits sold.
							</Typography>
						</Stack>
					</CardContent>
					<CardActions>
						<ButtonAsLink
							variant="contained"
							to={{ pathname: `/transactions/${proj.id}` }}
							text="View all receipts"
						/>
						{proj.remaining_credits > 0 &&
							proj.days_remaining > 0 && (
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
							)}
					</CardActions>
				</div>
			</Box>
		</StyledProjectCard>
	);
}
