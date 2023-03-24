import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
						© 2022 CreX
					</Typography>
					<Box
						style={{
							display: "flex",
							flexDirection: "column",
							marginBottom: "1rem",
						}}
					>
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
