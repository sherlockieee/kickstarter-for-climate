import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { getProjectsUserOwn } from "../../services/projects";
import { ApplyButton } from "../../components/Buttons";
import { ProjectOwnerCard } from "../../components/Card/ProjectOwnerCard";

type Props = {
	hidden: boolean;
};

export const OwnerSubpage = ({ hidden }: Props) => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		async function setProjectsUserOwns() {
			const res = await getProjectsUserOwn({
				order_by: ["percentage_raised"],
			});
			if (!res.err) {
				setProjects(res.data);
			}
		}
		if (!hidden) {
			setProjectsUserOwns();
		}
	}, [hidden]);
	return (
		<div hidden={hidden}>
			{projects.length === 0 ? (
				<div>
					<Typography variant="body1" sx={{ paddingBlock: "1rem" }}>
						You don&apos;t own any projects.
					</Typography>
					<ApplyButton variant="outlined" />
				</div>
			) : (
				<>
					<Typography variant="body1" sx={{ paddingBlock: "1rem" }}>
						You own {projects.length} projects.
					</Typography>

					<Stack direction="column" spacing={2}>
						{projects.map((proj, idx) => (
							<ProjectOwnerCard proj={proj} key={idx} />
						))}
					</Stack>
				</>
			)}
		</div>
	);
};
