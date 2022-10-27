import { CircularProgress, Typography } from "@material-ui/core";

import { Layout } from "../../components/Layout";
import { useAuth } from "../../contexts/auth";
import { getOneProject } from "../../services/projects";
import { ProjectContent } from "../../components/ProjectContent";

const CheckoutPage = ({ project }) => {
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
				Project backed successful!
			</Typography>
			<ProjectContent proj={project} />
		</Layout>
	);
};

CheckoutPage.requiresAuth = true;
CheckoutPage.redirectUnauthenticatedTo = "/projects";

export const getServerSideProps = async ({ query }) => {
	const project = await getOneProject(query?.id.toString());
	return { props: { project } };
};

export default CheckoutPage;
