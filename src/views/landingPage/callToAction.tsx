import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ApplyButton, ProjectButton } from "../../components/Buttons";

export const CallToAction = () => {
	return (
		<Container
			maxWidth="lg"
			style={{
				padding: "6rem 3rem",
				alignSelf: "center",
			}}
		>
			<Typography
				variant="h2"
				align="center"
				gutterBottom
				style={{ padding: "3rem" }}
			>
				The climate needs you. Take action today.
			</Typography>
			<Box
				style={{
					display: "flex",
					gap: `1rem`,
					marginTop: "1rem",
					justifyContent: "center",
				}}
			>
				<ApplyButton variant="outlined" />
				<ProjectButton />
			</Box>
		</Container>
	);
};
