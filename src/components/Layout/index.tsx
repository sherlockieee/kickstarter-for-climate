import { Container } from "@material-ui/core";
import React from "react";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

type Props = {
	children: NonNullable<React.ReactNode>;
};

export const Layout: React.FunctionComponent<Props> = ({ children }: Props) => {
	return (
		<>
			<NavBar />
			<Container maxWidth="md" style={{ margin: "3rem auto" }}>
				{children}
			</Container>
			<Footer />
		</>
	);
};
