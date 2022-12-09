import React, { useState } from "react";
import {
	Box,
	Button,
	CardActions,
	CardContent,
	CardMedia,
	TextField,
	Typography,
} from "@material-ui/core";
import ErrorIcon from "@mui/icons-material/Error";
import { Stack } from "@mui/system";

import { Project } from "../../../types/projects";
import { formatCurrency } from "../../../utils/currencyUtils";
import { createTransaction } from "../../../services/transactions";
import { useRouter } from "next/router";
import { StyledProjectCard } from "../../../styles/styledProjectCard";
import { ProjectHeader } from "../components/common";

export function CheckoutCard({ proj }: { proj: Project }) {
	const [numberOfCredits, setNumberOfCredits] = useState(
		Math.min(10, proj.remaining_credits)
	);
	const [error, setError] = useState("");

	const router = useRouter();
	const handleSubmitForm = async (
		e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		const res = await createTransaction({
			quantity: numberOfCredits,
			amount: proj.cost_per_credit * numberOfCredits,
			currency: proj.currency,
			project_id: proj.id,
		});

		if (res.err) {
			setError(res.err);
			return;
		}

		router.push(`/checkout/success?id=${proj.id}`);
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
					{error && (
						<Typography
							variant="body1"
							color="error"
							style={{
								display: "flex",
								alignItems: "center",
								gap: 8,
							}}
						>
							<ErrorIcon />
							{error}
						</Typography>
					)}
				</div>
			</Box>
		</StyledProjectCard>
	);
}
