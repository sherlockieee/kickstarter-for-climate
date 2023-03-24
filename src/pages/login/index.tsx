import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import { useRouter } from "next/router";

import { Layout } from "../../components/Layout";
import { NextLinkComposed } from "../../components/Link";
import { useAuth } from "../../contexts/auth";

function Login() {
	const [input, setInput] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const router = useRouter();
	const { login, loading } = useAuth();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await login(input);
			if (router.query.redirectTo) {
				router.push(router.query.redirectTo as string);
			} else {
				router.push("/projects");
			}
		} catch (error) {
			setError("Unable to authenticate. Please try again.");
		}
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
						required
					/>
					<Input
						placeholder="Enter your password..."
						value={input.password}
						type="password"
						onChange={(e) =>
							setInput({ ...input, password: e.target.value })
						}
						required
					/>
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
					<Button
						color="primary"
						variant="contained"
						type="submit"
						disabled={loading || false}
					>
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
