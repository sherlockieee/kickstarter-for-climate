import { useRouter } from "next/router";
import { useEffect } from "react";

import { Layout } from "../../components/Layout";
import { useUser } from "../../hooks/useUser";

type Props = {};

const CheckoutPage = (props: Props) => {
	const router = useRouter();
	const { user, isError, isLoading } = useUser();

	if (isError) {
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

	if (isLoading) {
		return (
			<Layout>
				<div>Loading...</div>
			</Layout>
		);
	}

	return (
		<Layout>
			<div>CheckoutPage</div>
			<div>{user!.email}</div>
		</Layout>
	);
};

export default CheckoutPage;
