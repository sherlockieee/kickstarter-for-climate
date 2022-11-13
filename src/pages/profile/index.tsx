import { CircularProgress, Typography } from "@material-ui/core";

import { Layout } from "../../components/Layout";
import { useAuth } from "../../contexts/auth";

const ProfilePage = () => {
	const { user } = useAuth();

	if (!user) {
		return (
			<Layout>
				<CircularProgress />
			</Layout>
		);
	}

	return (
		<Layout>
			<Typography variant="h1" align="center" gutterBottom>
				Projects owned
			</Typography>
		</Layout>
	);
};

ProfilePage.requiresAuth = true;
ProfilePage.redirectUnauthenticatedTo = "/login";

export default ProfilePage;
