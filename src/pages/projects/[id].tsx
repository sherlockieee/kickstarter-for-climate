import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { Layout } from "../../components/Layout";
import { ProjectContent } from "../../components/Card/ProjectContent";
import { getOneProject, getProjects } from "../../services/projects";
import { ProjectStatus } from "../../types/enumProjectStatus";
import { Project } from "../../types/projects";

export default function Post({ project }: { project: Project }) {
	return (
		<Layout>
			<ProjectContent proj={project} />
		</Layout>
	);
}

type Props = {
	project: Project;
};

interface Params extends ParsedUrlQuery {
	id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
	let data = await getProjects({
		filtered_status: Object.values(ProjectStatus),
	});

	const paths = data.map((proj) => ({ params: { id: proj.id.toString() } }));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
	params,
}) => {
	const project = await getOneProject(params!.id.toString());
	return { props: { project } };
};
