import { Button, Container, Input, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { NextLinkComposed } from "../../components/Link";

type Props = {};

function Login({}: Props) {
	const [input, setInput] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
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
					Sign In
				</Typography>
				<form
					onSubmit={handleSubmit}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1.5rem",
					}}
				>
					<Input
						placeholder="Enter your email..."
						type="email"
						value={input.email}
						onChange={(e) =>
							setInput({ ...input, email: e.target.value })
						}
					/>
					<Input
						placeholder="Enter your password..."
						value={input.password}
						type="password"
						onChange={(e) =>
							setInput({ ...input, password: e.target.value })
						}
					/>
					<Button color="primary" variant="contained" type="submit">
						Sign In{" "}
					</Button>
					<Button
						variant="text"
						component={NextLinkComposed}
						to={{ pathname: "/signup" }}
					>
						Don't have an account? Sign up.
					</Button>
				</form>
			</Container>
		</Layout>
	);
}

export default Login;
