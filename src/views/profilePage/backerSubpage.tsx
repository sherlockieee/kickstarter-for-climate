import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { getProjectsUserBack } from "../../services/projects";
import { ProjectButton } from "../../components/Buttons";
import { ProjectProfileCard } from "../../components/Card/ProjectProfileCard";
type Props = {
	hidden: boolean;
};

export const BackerSubpage = ({ hidden }: Props) => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		async function setProjectsUserFunds() {
			const res = await getProjectsUserBack();
			if (!res.err) {
				setProjects(res.data);
			}
		}
		if (!hidden) {
			setProjectsUserFunds();
		}
	}, [hidden]);
	return (
		<div hidden={hidden}>
			{projects.length === 0 ? (
				<div>
					<Typography variant="body1" sx={{ paddingBlock: "1rem" }}>
						You haven&apos;t funded any projects.
					</Typography>
					<ProjectButton variant="outlined" />
				</div>
			) : (
				<>
					<Typography variant="body1" sx={{ paddingBlock: "1rem" }}>
						You have funded {projects.length} projects.
					</Typography>
					<Stack direction="column" spacing={2}>
						{projects.map((proj, idx) => (
							<ProjectProfileCard proj={proj} key={idx} />
						))}
					</Stack>
				</>
			)}
		</div>
	);
};
