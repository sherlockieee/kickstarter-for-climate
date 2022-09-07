import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { ProjectCard } from "../../components/ProjectCard";
import { getOneProject, getProjects } from "../../services/projects";
import { Project } from "../../types/projects";

export default function Post(props: { project: Project }) {
  return (
    <div>
      <div>{props.project.uuid}</div>
      <div>{props.project.title}</div>
    </div>
  );
}

type Props = {
  project: Project;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data = await getProjects();

  const paths = data.map((proj) => ({ params: { id: proj.id.toString() } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const project = await getOneProject(params!.id.toString());
  return { props: { project } };
};
