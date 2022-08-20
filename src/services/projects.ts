import axios from "axios";
import { ProjectsList } from "../types/projects";

export async function getProjects() {
    const data: ProjectsList = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`).then(res =>  res.data ).catch(err => console.error(err))
    return data;
}