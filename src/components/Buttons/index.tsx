import Button from "@mui/material/Button";
import { NextLinkComposed } from "../Link";
import { LinkProps as NextLinkProps } from "next/link";
import React from "react";

type ButtonOverrideProps = {
	variant?: "contained" | "text" | "outlined";
	color?: "primary" | "secondary";
	text?: string;
};

interface ButtonAsLinkProps
	extends Omit<ButtonOverrideProps, "text">,
		Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "color"> {
	to: NextLinkProps["href"];
	text: string;
}

export const ButtonAsLink = (props: ButtonAsLinkProps) => (
	<Button
		variant={props.variant ? props.variant : "contained"}
		color={props.color ? props.color : "primary"}
		component={NextLinkComposed}
		to={props.to}
	>
		{props.text}{" "}
	</Button>
);

export const ProjectButton = (props: ButtonOverrideProps) => (
	<ButtonAsLink
		variant={props.variant ? props.variant : "contained"}
		color={props.color ? props.color : "primary"}
		to={{ pathname: "/projects" }}
		text={props.text ? props.text : "Browse Projects"}
	></ButtonAsLink>
);

export const ApplyButton = (props: ButtonOverrideProps) => (
	<ButtonAsLink
		variant={props.variant ? props.variant : "contained"}
		color={props.color ? props.color : "primary"}
		to="https://forms.gle/v5MZhi4pvoCLMyfa7"
		text={props.text ? props.text : "Apply for funding"}
		target="_blank"
		rel="noopener noreferrer"
	></ButtonAsLink>
);
