import axios from "axios";
import { Project, ProjectsList } from "../types/projects";

export async function getProjects() {
    const data: ProjectsList = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`).then(res =>  res.data ).catch(err => console.error(err))
    return data;
}

export async function getOneProject(id: string) {
    const data: Project = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${id}`).then(res =>  res.data ).catch(err => console.error(err))
    return data;
}