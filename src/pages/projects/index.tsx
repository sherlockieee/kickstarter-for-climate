import { getProjects } from "../../services/projects";
import { ProjectsList } from "../../types/projects";
import { styled } from "@mui/material/styles";
import { LinearProgress } from "@material-ui/core";
import { linearProgressClasses } from "@mui/material";
import { ProjectCard } from "../../components/ProjectCard";

export default function Home({ projects }: { projects: ProjectsList }) {
  return (
    <>
      <section>
        <h1>Fund a project</h1>
        <p>
          All these projects are vetted by professionals and are guaranteed to
          bring a minimum amount of carbon credits.
        </p>
      </section>
      <section>
        {projects.map((proj) => (
          <ProjectCard proj={proj} />
        ))}
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const projects = await getProjects();
  return { props: { projects } };
}
