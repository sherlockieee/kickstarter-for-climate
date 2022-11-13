import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { withRouter } from "next/router";

import theme from "../../constants/theme";
import { Tab } from "@material-ui/core";
import Link from "next/link";

function a11yProps(value: string) {
	return {
		id: `tab-${value}`,
		"aria-controls": `tabpanel-${value}`,
	};
}

const SubpageInfo = [
	{
		name: "owner",
		param: "owner",
		label: "Projects you own",
	},
	{
		name: "backer",
		param: "backer",
		label: "Projects you fund",
	},
];
const OwnerSubpage = () => {
	return <div>Owner</div>;
};

const BackerSubpage = () => {
	return <div>Backer</div>;
};

function ProfileTab({ router }) {
	const {
		query: { tab },
	} = router;
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
							{...a11yProps(subpage.name)}
						/>
					))}
				</Tabs>
			</Box>
			{tab === "owner" && <OwnerSubpage />}
			{tab === "backer" && <BackerSubpage />}
		</Box>
	);
}

export default withRouter(ProfileTab);
