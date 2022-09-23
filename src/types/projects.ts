export interface Tag {
	id: string;
	name: string;
}

export interface Project {
	id: number;
	uuid: string;
	title: string;
	funding_needed: number;
	currency: "USD" | "EUR";
	total_raised: number;
	total_backers: number;
	description: string;
	created: string;
	end_date: string;
	tags: Tag[];
}

export type ProjectsList = Project[];
