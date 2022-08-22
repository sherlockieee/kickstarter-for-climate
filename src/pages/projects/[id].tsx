import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { getOneProject, getProjects } from "../../services/projects";
import { Project } from "../../types/projects";

export default function Post(props: { project: Project }) {
  return <>Hello World</>;
}

type Props = {
  project: Project;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const project = await getOneProject(params!.id);
  return { props: { project } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let data = await getProjects();

  const paths = data.map((proj) => ({ params: { id: proj.id } }));

  return { paths, fallback: false };
};
