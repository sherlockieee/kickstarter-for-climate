import { Button, Container, Input, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { NextLinkComposed } from "../../components/Link";
import { getToken } from "../../services/user";

function Login() {
	const [isLoading, setIsLoading] = useState(false);
	const [input, setInput] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setIsLoading(true);
		const { is_error, token, msg } = await getToken(input);
		if (is_error) {
			setError(msg);
		} else {
			console.log(token);
		}
		setIsLoading(false);
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
						Don&quot;t have an account? Sign up.
					</Button>
				</form>
			</Container>
		</Layout>
	);
}

export default Login;
