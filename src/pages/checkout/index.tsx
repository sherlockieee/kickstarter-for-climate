import { Typography } from "@material-ui/core";

import { Layout } from "../../components/Layout";
import { useAuth } from "../../contexts/auth";

const CheckoutPage = () => {
	const { loading, user } = useAuth();

	if (loading) {
		return (
			<Layout>
				<div>Loading...</div>
			</Layout>
		);
	}

	return (
		<Layout>
			<Typography variant="h1" align="center">
				Checkout
			</Typography>
			<div>{user!.email}</div>
		</Layout>
	);
};

CheckoutPage.requiresAuth = true;

export default CheckoutPage;
