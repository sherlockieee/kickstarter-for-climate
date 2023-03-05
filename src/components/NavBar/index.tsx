import { useState } from "react";
import { AppBar, Box, Toolbar, Tooltip, Typography } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import theme from "../../constants/theme";
import { useAuth } from "../../contexts/auth";
import { NextLinkComposed } from "../Link";
import MenuDropDown from "./MenuDropdown.tsx";
import { ApplyButton, ProjectButton } from "../Buttons";

export const NavBar = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const { user } = useAuth();
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};

	return (
		<>
			<Box sx={{ display: "flex" }}>
				<AppBar
					component="nav"
					color="transparent"
					position="sticky"
					style={{ boxShadow: "none", padding: "1rem" }}
				>
					<Toolbar>
						<Typography
							variant="h5"
							component={NextLinkComposed}
							to={{ pathname: "/projects" }}
							style={{
								flexGrow: 1,
								color: theme.palette.secondary.main,
								textDecoration: "none",
							}}
						>
							CreX | Crowdfund climate projects
						</Typography>
						<Box style={{ display: "flex", gap: `1rem` }}>
							<ApplyButton variant="outlined" />
							<ProjectButton />

							{user && (
								<Tooltip title="Account settings">
									<IconButton
										onClick={handleClick}
										size="medium"
										sx={{ ml: 2 }}
										aria-controls={
											open ? "account-menu" : undefined
										}
										aria-haspopup="true"
										aria-expanded={
											open ? "true" : undefined
										}
									>
										<Avatar
											sx={{ width: 40, height: 40 }}
										></Avatar>
									</IconButton>
								</Tooltip>
							)}
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
			<MenuDropDown anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
		</>
	);
};
