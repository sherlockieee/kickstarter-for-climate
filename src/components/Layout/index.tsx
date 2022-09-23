import { Container } from "@material-ui/core";
import React from "react";
import { NavBar } from "../NavBar";

type Props = {
	children: NonNullable<React.ReactNode>;
};

export const Layout: React.FunctionComponent<Props> = ({ children }: Props) => {
	return (
		<>
			<NavBar />
			<Container maxWidth="md" style={{ marginTop: "3rem" }}>
				{children}
			</Container>
		</>
	);
};
