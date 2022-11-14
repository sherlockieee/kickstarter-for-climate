import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { getProjectsUserOwn } from "../../services/projects";
import { ApplyButton } from "../../components/CommonButtons";

type Props = {
	hidden: boolean;
};

export const OwnerSubpage = ({ hidden }: Props) => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		async function setProjectsUserOwns() {
			const res = await getProjectsUserOwn();
			if (!res.err) {
				setProjects(res.data);
			}
		}
		if (!hidden) {
			console.log("not hidden");
			setProjectsUserOwns();
		}
	}, [hidden]);
	return (
		<div hidden={hidden}>
			{projects.length === 0 ? (
				<div>
					<Typography variant="body1" sx={{ paddingBlock: "1rem" }}>
						You don't own any projects.
					</Typography>
					<ApplyButton variant="outlined" />
				</div>
			) : (
				<Typography>You have {projects.length} projects</Typography>
			)}
		</div>
	);
};
