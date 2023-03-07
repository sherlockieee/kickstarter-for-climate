import {
	Box,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";
import { Stack } from "@mui/system";

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
					image="https://arbordayblog.org/wp-content/uploads/2016/06/tree.jpg"
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
