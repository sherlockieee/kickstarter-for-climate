import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { withRouter } from "next/router";

import theme from "../../constants/theme";
import { Tab } from "@material-ui/core";
import Link from "next/link";
import { OwnerSubpage } from "../../views/profilePage/ownerSubpage";
import { BackerSubpage } from "../../views/profilePage/backerSubpage";

function a11yProps(value: string) {
	return {
		id: `tab-${value}`,
		"aria-controls": `tabpanel-${value}`,
	};
}

const SubpageInfo = [
	{
		name: "backer",
		param: "backer",
		label: "Projects you fund",
	},
	{
		name: "owner",
		param: "owner",
		label: "Projects you own",
	},
];

function ProfileTab({ router }) {
	const {
		query: { tab },
	} = router;
	if (!tab) {
		router.query.tab = "backer";
		router.push(router);
	}
	const [value, setValue] = useState(tab);

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="Project tabs"
					textColor="primary"
					indicatorColor="primary"
					centered
					variant="fullWidth"
					sx={{
						display: "flex",
						gap: 16,
						color: theme.palette.info.main,
						fontFamily: theme.typography.fontFamily,

						"& .MuiTabs-indicator": {
							backgroundColor: theme.palette.primary.main,
						},
						"& .Mui-selected": {
							color: theme.palette.primary.main,
						},
					}}
				>
					{SubpageInfo.map((subpage) => (
						<Tab
							onClick={(event) => {
								event.preventDefault();
							}}
							label={
								<Link
									href={{
										pathname: "/profile",
										query: { tab: subpage.param },
									}}
									passHref
								>
									<Typography
										variant="body2"
										sx={{
											position: "absolute",
											top: 0,
											left: 0,
											right: 0,
											bottom: 0,
										}}
									>
										{subpage.label}
									</Typography>
								</Link>
							}
							value={subpage.name}
							{...a11yProps(subpage.name)}
						/>
					))}
				</Tabs>
			</Box>
			{<BackerSubpage hidden={tab !== "backer"} />}
			{<OwnerSubpage hidden={tab !== "owner"} />}
		</Box>
	);
}

export default withRouter(ProfileTab);
