import { useState } from "react";
import {
	Box,
	Button,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	TextField,
	Typography,
} from "@material-ui/core";
import { Stack } from "@mui/system";
import { DateTime } from "luxon";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { styled } from "@mui/material/styles";
import Card, { CardProps } from "@mui/material/Card";

import { Project } from "../../types/projects";
import { formatCurrency } from "../../utils/currencyUtils";
import { NextLinkComposed } from "../Link";
import { ProgressBar } from "../ProgressBar";
import { core } from "../../constants/theme";
import { calculateDaysBetween } from "../../utils/dateUtils";

const StyledProjectCard = styled(Card)<CardProps>(() => ({
	boxShadow: "none",
	"& .MuiTypography-root, .MuiButton-label": {
		color: core.darkGreen,
	},
	padding: "1rem",
}));

export function CheckoutCard({ proj }: { proj: Project }) {
	const [numberOfCredits, setNumberOfCredits] = useState(
		Math.min(10, proj.needed_credits)
	);
	const handleSubmitForm = (e) => {
		e.preventDefault();
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
							<Typography
								variant="h5"
								component={NextLinkComposed}
								to={{ pathname: `/projects/${proj.id}` }}
								style={{ textDecoration: "none" }}
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
									/>
								))}
							</Stack>
							<form onSubmit={handleSubmitForm}>
								<Typography variant="body1" gutterBottom>
									Cost per credit:{" "}
									{formatCurrency({
										value: proj.cost_per_credit,
										currency: proj.currency,
									})}{" "}
								</Typography>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										gap: 8,
										marginBottom: "1rem",
									}}
								>
									<Typography
										variant="body1"
										component="span"
									>
										Number of credits:{"  "}
									</Typography>
									<TextField
										type="number"
										inputProps={{
											type: "number",
										}}
										value={numberOfCredits}
										onChange={(e) => {
											if (isNaN(+e.target.value)) {
												return;
											}
											const number = Math.max(
												Math.min(
													+e.target.value,
													proj.needed_credits
												),
												1
											);
											setNumberOfCredits(number);
										}}
										size="small"
										variant="outlined"
										style={{ width: "10ch" }}
									/>
								</div>
								<div>
									<Typography
										variant="body1"
										component="span"
									>
										Total cost ={" "}
									</Typography>
									<Typography variant="h6" component="span">
										{formatCurrency({
											value:
												proj.cost_per_credit *
												numberOfCredits,
											currency: proj.currency,
										})}
									</Typography>
								</div>
							</form>
						</Stack>
					</CardContent>
					<CardActions>
						<Button
							size="medium"
							variant="contained"
							color="primary"
							onClick={handleSubmitForm}
						>
							Back project
						</Button>
					</CardActions>
				</div>
			</Box>
		</StyledProjectCard>
	);
}
