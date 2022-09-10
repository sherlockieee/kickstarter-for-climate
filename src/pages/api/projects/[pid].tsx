import { Project } from "../../../types/projects";
import type { NextApiRequest, NextApiResponse } from "next";
import { mockData } from ".";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project>
) {
  const { pid } = req.query;
  const post = mockData.filter((val) => val.id.toString() === pid)[0];
  res.status(200).json(post);
}
