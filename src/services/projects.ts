import axios from "axios";
import Cookies from "js-cookie";
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
			return { err };
		});
	return data;
}

export async function getProjectsUserOwn() {
	const token = Cookies.get("token");
	const headers = { Authorization: `Bearer ${token}` };
	const res = await axios
		.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/me/owner`, {
			headers,
		})
		.then((res) => {
			return { data: res.data, err: null };
		})
		.catch((err) => {
			console.error(err);
			return { data: null, err };
		});

	return res;
}

export async function getProjectsUserBack() {
	const token = Cookies.get("token");
	const headers = { Authorization: `Bearer ${token}` };
	const res = await axios
		.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/me/backer`, {
			headers,
		})
		.then((res) => {
			return { data: res.data, err: null };
		})
		.catch((err) => {
			console.error(err);
			return { data: null, err };
		});

	return res;
}
