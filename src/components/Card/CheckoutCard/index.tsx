import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { Project } from "../../../types/projects";
import { formatCurrency } from "../../../utils/currencyUtils";
import { createPaymentSession } from "../../../services/transactions";
import { StyledProjectCard } from "../../../styles/styledProjectCard";
import { ProjectHeader } from "../components/common";

export function CheckoutCard({ proj }: { proj: Project }) {
	const [numberOfCredits, setNumberOfCredits] = useState(
		Math.min(10, proj.remaining_credits)
	);

	const handleSubmitForm = async (
		e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();

		const url = await createPaymentSession({
			quantity: numberOfCredits,
			amount: proj.cost_per_credit,
			currency: proj.currency,
			project: proj,
		});

		console.log({ url });
		window.location.href = url;

		// const res = await createTransaction({

		// });

		// router.push(`/checkout/success?id=${proj.id}`);
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
													proj.remaining_credits
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
						{proj.remaining_credits > 0 && (
							<Button
								size="medium"
								variant="contained"
								color="primary"
								onClick={handleSubmitForm}
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
