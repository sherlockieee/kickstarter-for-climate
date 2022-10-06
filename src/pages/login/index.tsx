import { Button, Container, Input, Typography } from "@material-ui/core";
import ErrorIcon from "@mui/icons-material/Error";
import { useRouter } from "next/router";

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
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setIsLoading(true);
		const { is_error, token, msg } = await getToken(input);
		if (is_error) {
			setError(msg);
		} else {
			localStorage.setItem("token", JSON.stringify(token!.access_token));
			if (router.query.redirectTo) {
				router.push(router.query.redirectTo as string);
			} else {
				router.push("/projects");
			}
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
						disabled={isLoading}
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
