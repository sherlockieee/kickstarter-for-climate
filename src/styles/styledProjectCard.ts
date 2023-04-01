import { styled } from "@mui/material/styles";
import Card, { CardProps } from "@mui/material/Card";
import { core } from "../constants/theme";

export const StyledProjectCard = styled(Card)<CardProps>(() => ({
	boxShadow: "none",
	"& .MuiTypography-root, .MuiButton-label": {
		color: core.darkGreen,
	},
	padding: "1rem",
}));
