import { getProjects } from "../../services/projects";
import { ProjectsList } from "../../types/projects";
import { Container, Typography } from "@material-ui/core";
import { ProjectCard } from "../../components/ProjectCard";
import { Stack } from "@mui/system";
import { NavBar } from "../../components/NavBar";

export default function Home({ projects }: { projects: ProjectsList }) {
	return (
		<>
			<NavBar />
			<Container maxWidth="md" style={{ marginTop: "3rem" }}>
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
								<ProjectCard proj={proj} key={proj.id} />
							))}
						</Stack>
					) : (
						<Typography variant="body2" color="error">
							Error: No projects found.
						</Typography>
					)}
				</section>
			</Container>
		</>
	);
}

export async function getServerSideProps() {
	const projects = await getProjects();
	return { props: { projects } };
}
