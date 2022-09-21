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
import { Project } from "../../types/projects";
import { formatCurrency } from "../../utils/formatCurrency";
import { NextLinkComposed } from "../Link";
import { ProgressBar } from "../ProgressBar";
import { core } from "../../constants/theme";
import { styled } from "@mui/material/styles";
import Card, { CardProps } from "@mui/material/Card";

const StyledProjectCard = styled(Card)<CardProps>(() => ({
	boxShadow: "none",
	"& .MuiTypography-root, .MuiButton-label": {
		color: core.darkGreen,
	},
	padding: "2rem",
}));

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
							<Stack direction="row" spacing={1}>
								{proj.tags.map((tag) => (
									<Chip
										label={tag.name}
										key={tag.id}
										color="primary"
										variant="outlined"
									/>
								))}
							</Stack>
						</Stack>
					</CardContent>
					<CardActions>
						<Button
							size="medium"
							variant="contained"
							color="primary"
						>
							Back project
						</Button>
					</CardActions>
				</div>
			</Box>
			<Divider />
			<Typography variant="body1" style={{ marginTop: "1rem" }}>
				{proj.description}
			</Typography>
		</StyledProjectCard>
	);
}
