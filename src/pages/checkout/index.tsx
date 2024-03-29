import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { Layout } from "../../components/Layout";
import { useAuth } from "../../contexts/auth";
import { getOneProject } from "../../services/projects";

import { CheckoutCard } from "../../components/Card/CheckoutCard";
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
				Back this project
			</Typography>
			<CheckoutCard proj={project} />
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
