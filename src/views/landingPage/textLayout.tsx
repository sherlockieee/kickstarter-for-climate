import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

type TextLayoutProps = {
	imgSource: string;
	title: string;
	text: string;
	callToAction: JSX.Element;
	reverse?: boolean;
};

export const TextLayout = ({
	imgSource,
	title,
	text,
	callToAction,
	reverse = false,
}: TextLayoutProps) => {
	return (
		<Container maxWidth="lg">
			<Grid
				container
				spacing={4}
				style={{ marginTop: "2rem" }}
				direction={reverse ? "row-reverse" : "row"}
				alignItems="center"
			>
				<Grid
					item
					xs={12}
					md={6}
					style={{
						padding: "1rem 2rem",
						alignSelf: "center",
						boxSizing: "border-box",
					}}
				>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src={imgSource}
						alt=""
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					style={{ padding: "1rem 2rem", boxSizing: "border-box" }}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "2rem",
							alignItems: "flex-start",
							justifyContent: "center",
						}}
					>
						<Typography variant="h3">{title}</Typography>
						<Typography variant="body1" gutterBottom>
							{text}
						</Typography>
						{callToAction}
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};
