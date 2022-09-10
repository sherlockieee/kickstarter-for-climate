import { Button } from "@material-ui/core";
import { NextLinkComposed } from "../../components/Link";

type ButtonOverrideProps = {
	variant?: "contained" | "text" | "outlined";
	color?: "primary" | "secondary";
};

export const ProjectButton = (props: ButtonOverrideProps) => (
	<Button
		variant={props.variant ? props.variant : "contained"}
		color={props.color ? props.color : "primary"}
		component={NextLinkComposed}
		to={{ pathname: "/projects" }}
	>
		Browse projects
	</Button>
);

export const ApplyButton = (props: ButtonOverrideProps) => (
	<Button
		variant={props.variant ? props.variant : "contained"}
		color={props.color ? props.color : "primary"}
		component={NextLinkComposed}
		to="https://forms.gle/v5MZhi4pvoCLMyfa7"
		target="_blank"
		rel="noopener noreferrer"
	>
		Apply for funding
	</Button>
);
