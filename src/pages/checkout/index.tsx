import { CircularProgress, Typography } from "@material-ui/core";

import { Layout } from "../../components/Layout";
import { useAuth } from "../../contexts/auth";

const CheckoutPage = () => {
	const { user } = useAuth();

	return (
		<Layout>
			<Typography variant="h1" align="center">
				Checkout
			</Typography>
			{user ? (
				<div>{user.email}</div>
			) : (
				<CircularProgress color="primary" />
			)}
		</Layout>
	);
};

CheckoutPage.requiresAuth = true;
CheckoutPage.redirectUnauthenticatedTo = "/projects";

export default CheckoutPage;
