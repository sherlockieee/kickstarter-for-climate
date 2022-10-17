import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";

import { Layout } from "../../components/Layout";
import { useAuth } from "../../contexts/auth";

type Props = {};

const CheckoutPage = (props: Props) => {
	const router = useRouter();
	const { loading, user } = useAuth();

	if (!user) {
		router.push(
			{
				pathname: "/login",
				query: { redirectTo: "/checkout" },
			},
			undefined,
			{ shallow: true }
		);
		return;
	}

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

export default CheckoutPage;
