import { CircularProgress, Typography } from "@material-ui/core";

import { Layout } from "../../components/Layout";
import { useAuth } from "../../contexts/auth";
import { getOneProject } from "../../services/projects";
import { ProjectContent } from "../../components/ProjectContent";
import { Project } from "../../types/projects";
import { ButtonAsLink, ProjectButton } from "../../components/CommonButtons";
import { NextLinkComposed } from "../../components/Link";

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
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography variant="h1" align="center" gutterBottom>
					Project backed successfully!
				</Typography>
				<Typography variant="body1" align="center" gutterBottom>
					You will receive an email confirmation soon! Thank you for
					supporting.
				</Typography>
				<div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
					<ProjectButton text="Browse more projects" />
					<ButtonAsLink
						to={{ pathname: "/profile" }}
						variant="outlined"
						text="View profile"
					></ButtonAsLink>
				</div>
			</div>
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
