import { Button, Container, Input, Typography } from "@material-ui/core";
import ErrorIcon from "@mui/icons-material/Error";
import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { NextLinkComposed } from "../../components/Link";

type Props = {};

function SignUpPage({}: Props) {
	const [input, setInput] = useState({
		full_name: "",
		preferred_name: "",
		email: "",
		password: "",
		reEnterPassword: "",
	});

	const [error, setError] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.password !== input.reEnterPassword) {
			setError("You enter two different passwords. Please try again.");
			return;
		}
		console.log(input);
	};
	return (
		<Layout>
			<Container
				maxWidth="xs"
				component="div"
				style={{
					backgroundColor: "white",
					borderRadius: 4,
					padding: "2rem",
				}}
			>
				<Typography variant="h2" align="center" gutterBottom>
					Sign Up
				</Typography>
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
				<form
					onSubmit={handleSubmit}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1.5rem",
					}}
				>
					<Input
						placeholder="Enter your full name"
						value={input.full_name}
						onChange={(e) =>
							setInput({ ...input, full_name: e.target.value })
						}
					/>
					<Input
						placeholder="Enter your preferred name"
						value={input.preferred_name}
						onChange={(e) =>
							setInput({
								...input,
								preferred_name: e.target.value,
							})
						}
					/>
					<Input
						placeholder="Enter your email"
						type="email"
						value={input.email}
						onChange={(e) =>
							setInput({ ...input, email: e.target.value })
						}
					/>
					<Input
						placeholder="Enter your password"
						value={input.password}
						type="password"
						onChange={(e) =>
							setInput({ ...input, password: e.target.value })
						}
					/>
					<Input
						placeholder="Re-enter your password"
						value={input.reEnterPassword}
						type="password"
						onChange={(e) =>
							setInput({
								...input,
								reEnterPassword: e.target.value,
							})
						}
					/>
					<Button color="primary" variant="contained" type="submit">
						Sign Up{" "}
					</Button>
					<Button
						variant="text"
						component={NextLinkComposed}
						to={{ pathname: "/login" }}
					>
						Already have an account? Sign in.
					</Button>
				</form>
			</Container>
		</Layout>
	);
}

export default SignUpPage;
