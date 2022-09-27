import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import theme from "../../constants/theme";
import { NextLinkComposed } from "../Link";

export const NavBar = () => {
	return (
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
						X | Kickstarter for Climate
					</Typography>
					<Box style={{ display: "flex", gap: `1rem` }}>
						<Button
							variant="outlined"
							color="primary"
							component={NextLinkComposed}
							to="https://forms.gle/v5MZhi4pvoCLMyfa7"
							target="_blank"
							rel="noopener noreferrer"
						>
							Apply for funding{" "}
						</Button>
						<Button
							variant="contained"
							color="primary"
							component={NextLinkComposed}
							to={{ pathname: "/projects" }}
						>
							Browse projects
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
