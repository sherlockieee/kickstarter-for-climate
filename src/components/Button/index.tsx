import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import MuiButton, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";

export type ColorTypes = "primary" | "secondary" | "error" | "success";

type ButtonProps = { color: ColorTypes } & Omit<MuiButtonProps, "color">;

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    outlinedSuccess: {
      borderColor: theme.palette.success.main,
      color: theme.palette.success.main,
    },
    outlinedError: {
      borderColor: theme.palette.error.main,
      color: theme.palette.error.main,
    },
    containedSuccess: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.success.dark,
      },
    },
    containedError: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.error.dark,
      },
    },
  })
);

const Button: React.FC<ButtonProps> = ({ children, color, ...props }) => {
  const classes = useStyles();
  const className = classes?.[`${props.variant}${color}`];
  const colorProp =
    ["default", "inherit", "primary", "secondary"].indexOf(color) > -1
      ? (color as "default" | "inherit" | "primary" | "secondary")
      : undefined;

  return (
    <MuiButton {...props} color={colorProp} className={className}>
      {children}
    </MuiButton>
  );
};

Button.displayName = "Button";

export default Button;
