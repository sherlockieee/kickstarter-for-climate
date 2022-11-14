import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { getProjectsUserBack } from "../../services/projects";
import { ProjectButton } from "../../components/CommonButtons";

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
				console.log(res.data);
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
						You don't own any projects.
					</Typography>
					<ProjectButton variant="outlined" />
				</div>
			) : (
				<Typography variant="body1" sx={{ paddingBlock: "1rem" }}>
					You have {projects.length} projects
				</Typography>
			)}
		</div>
	);
};
