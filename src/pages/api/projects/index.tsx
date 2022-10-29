import type { NextApiRequest, NextApiResponse } from "next";
import type { ProjectsList } from "../../../types/projects";

export const mockData: ProjectsList = [
	{
		id: 1,
		uuid: "abc",
		created: "2021-12-17T03:24:00",
		end_date: "2022-10-09T03:24:00",
		title: "Biochar Project",
		funding_needed: 30000,
		currency: "USD",
		total_raised: 15000,
		total_backers: 50,
		description:
			"We hope to remove 10,000 tonnes of CO2 by 2025 using biochar as a fertilizer in rural regions in Vietnam. This project has been piloted in Da Nang, and the result has been positive: farms with biochar application are able to produce 30% more output while also drawing down 43% more carbon into the soil.",
		tags: [
			{
				id: "1",
				name: "Agriculture",
			},
		],
		total_credits: 100,
		cost_per_credit: 300,
		credits_sold: 50,
	},
	{
		id: 2,
		uuid: "def",
		created: "2022-01-01T03:24:00",
		end_date: "2022-12-09T03:24:00",
		title: "Direct Air Capture  Project",
		funding_needed: 17000,
		currency: "USD",
		total_raised: 5000,
		total_backers: 12,
		description:
			"Direct air capture draws carbon dioxide directly from the air and creates rocks that can then be used in other industrial applications. We believe each of these carbon credits will be worth a lot because they are pure carbon draw down produced at industrial level scale. The money would go into producing more machinery as well as R & D.",
		tags: [
			{
				id: "2",
				name: "Carbon capture & storage",
			},
			{
				id: "3",
				name: "Permanent (100+ years)",
			},
		],
		total_credits: 100,
		cost_per_credit: 170,
		credits_sold: 50,
	},
];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ProjectsList>
) {
	if (req.query.tags) {
		if (typeof req.query.tags === "string") {
			req.query.tags = [req.query.tags];
		}
		res.status(200).json(
			mockData.filter((proj) =>
				proj.tags.some((tag) => req.query.tags!.includes(tag.id))
			)
		);
		return;
	}

	res.status(200).json(mockData);
}
