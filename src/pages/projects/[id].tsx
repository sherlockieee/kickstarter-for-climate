import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { Layout } from "../../components/Layout";
import { ProjectContent } from "../../components/Card/ProjectContent";
import { getOneProject, getProjects } from "../../services/projects";

export default function Post() {
	const router = useRouter();
	const { id } = router.query;
	const [project, setProject] = useState(null);

	useEffect(() => {
		async function getAndSetProject() {
			const curProject = await getOneProject(id.toString());
			setProject(curProject);
		}

		getAndSetProject();
	}, [id]);

	if (!project) {
		return (
			<Layout>
				<CircularProgress />
			</Layout>
		);
	}

	return (
		<Layout>
			<ProjectContent proj={project} />
		</Layout>
	);
}
