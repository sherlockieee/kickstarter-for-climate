import { Container, Typography } from "@material-ui/core";
import Link from "next/link";
import { NextLinkComposed } from "../components/Link";

export default function FourOhFour() {
	return (
		<Container
			maxWidth="lg"
			style={{
				marginTop: "3rem",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Typography variant="h1" gutterBottom>
				404 - Page Not Found
			</Typography>
			<Typography
				variant="body1"
				component={NextLinkComposed}
				to={{ pathname: "/" }}
			>
				Go back home
			</Typography>
		</Container>
	);
}
