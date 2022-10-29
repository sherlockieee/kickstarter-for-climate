import axios from "axios";
import { Project, ProjectsList } from "../types/projects";

type Props = {
	tags?: number[];
	skip?: number;
	limit?: number;
};
export async function getProjects(props: Props) {
	const { tags = [], skip = 0, limit = 20 } = props;
	const data: ProjectsList = await axios
		.get<Props, { data: ProjectsList }>(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects?tags=${tags}&skip=${skip}&limit=${limit}`
		)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err);
			return [];
		});

	return data;
}

export async function getOneProject(id: string) {
	const data: Project = await axios
		.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${id}`)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err);
			return {};
		});
	return data;
}
