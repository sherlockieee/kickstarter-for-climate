import { getProjects } from "../../services/projects";
import { ProjectsList } from "../../types/projects";
import { Container, Typography } from "@material-ui/core";
import { ProjectCard } from "../../components/ProjectCard";
import { Stack } from "@mui/system";

export default function Home({ projects }: { projects: ProjectsList }) {
  return (
    <Container maxWidth="md">
      <section>
        <Typography variant="h3" align="center" gutterBottom>
          Fund a project
        </Typography>
        <Typography variant="body1" align="center">
          All these projects are vetted by professionals and are guaranteed to
          bring a minimum amount of carbon credits.
        </Typography>
      </section>
      <section>
        <Stack direction="column" spacing={2}>
          {projects.map((proj) => (
            <ProjectCard proj={proj} />
          ))}
        </Stack>
      </section>
    </Container>
  );
}

export async function getServerSideProps() {
  const projects = await getProjects();
  return { props: { projects } };
}
