import { CircularProgress } from "@material-ui/core";

import { Layout } from "../../components/Layout";
import useUser from "../../hooks/useUser";

type Props = {};

const CheckoutPage = (props: Props) => {
	const { user } = useUser({ redirectTo: "/login" });

	// Server-render loading state
	if (!user || user.isLoggedIn === false) {
		return (
			<Layout>
				<CircularProgress />
			</Layout>
		);
	}

	// Once the user request finishes, show the user
	return (
		<Layout>
			<div>CheckoutPage</div>
		</Layout>
	);
};

export default CheckoutPage;