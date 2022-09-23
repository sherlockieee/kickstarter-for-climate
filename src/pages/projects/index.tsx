import { getProjects } from "../../services/projects";
import { ProjectsList } from "../../types/projects";
import { Typography } from "@material-ui/core";
import { ProjectCard } from "../../components/ProjectCard";
import { Stack } from "@mui/system";
import { Layout } from "../../components/Layout";
import { useState } from "react";

export default function Home({
	initialProjects,
}: {
	initialProjects: ProjectsList;
}) {
	const [projects, setProjects] = useState(initialProjects);
	return (
		<Layout>
			<section>
				<Typography variant="h1" align="center" gutterBottom>
					Fund a project
				</Typography>
				<Typography variant="body1" align="center" gutterBottom>
					All these projects are vetted by professionals and are
					guaranteed to bring a minimum amount of carbon credits.
				</Typography>
			</section>
			<section style={{ marginTop: "3rem" }}>
				{projects.length > 0 ? (
					<Stack direction="column" spacing={2}>
						{projects.map((proj) => (
							<ProjectCard
								proj={proj}
								key={proj.id}
								setProjects={setProjects}
							/>
						))}
					</Stack>
				) : (
					<Typography variant="body2" color="error">
						Error: No projects found.
					</Typography>
				)}
			</section>
		</Layout>
	);
}

export async function getServerSideProps() {
	const initialProjects = await getProjects({});
	return { props: { initialProjects } };
}
