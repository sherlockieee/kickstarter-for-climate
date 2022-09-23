import {
	AppBar,
	Box,
	Button,
	Container,
	Link,
	Toolbar,
	Typography,
} from "@material-ui/core";
import theme from "../../constants/theme";
import { NextLinkComposed } from "../Link";

export const Footer = () => {
	return (
		<Container maxWidth="lg">
			<Box sx={{ display: "flex" }}>
				<Toolbar style={{ width: "100%" }}>
					<Typography
						variant="body1"
						style={{
							flexGrow: 1,
							color: theme.palette.secondary.main,
						}}
					>
						© 2022 X | Kickstarter for Climate
					</Typography>
					<Box style={{ display: "flex", flexDirection: "column" }}>
						<Typography
							variant="body1"
							component={NextLinkComposed}
							to={{ pathname: "/" }}
						>
							Home
						</Typography>
						<Typography
							variant="body1"
							component={NextLinkComposed}
							to={{ pathname: "/projects" }}
						>
							Browse projects
						</Typography>

						<Typography
							variant="body1"
							component={NextLinkComposed}
							to="https://forms.gle/v5MZhi4pvoCLMyfa7"
							target="_blank"
							rel="noopener noreferrer"
						>
							Apply for funding
						</Typography>
					</Box>
				</Toolbar>
			</Box>
		</Container>
	);
};
