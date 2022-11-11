import { CircularProgress, Typography } from "@material-ui/core";

import { Layout } from "../../components/Layout";
import { useAuth } from "../../contexts/auth";
import { getOneProject } from "../../services/projects";
import { ProjectContent } from "../../components/ProjectContent";
import { Project } from "../../types/projects";

const CheckoutPage = ({ project }: { project: Project }) => {
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
				Project backed successfully!
			</Typography>
			<Typography variant="body1" align="center" gutterBottom>
				You will receive an email confirmation soon! Thank you for
				supporting.
			</Typography>
			<ProjectContent proj={project} />
		</Layout>
	);
};

CheckoutPage.requiresAuth = true;
CheckoutPage.redirectUnauthenticatedTo = "/projects";

export const getServerSideProps = async ({ query }: any) => {
	const project = await getOneProject(query?.id.toString());
	return { props: { project } };
};

export default CheckoutPage;
