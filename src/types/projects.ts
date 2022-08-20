interface Tag {
    id: string,
    name: string;
}

export interface Project {
    id: string;
    title: string;
    funding_needed: number;
    currency: "USD" | "EUR";
    total_raised: number;
    total_backers: number;
    description:
      string;
    tags: Tag[]
}

export type ProjectsList = Project[]