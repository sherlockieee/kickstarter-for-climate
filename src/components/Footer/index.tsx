import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import theme from "../../constants/theme";
import { NextLinkComposed } from "../Link";

export const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex" }}>
        <Toolbar>
          <Typography
            variant="body1"
            style={{ flexGrow: 1, color: theme.palette.secondary.main }}
          >
            © 2022 X | Kickstarter for Climate
          </Typography>
          <Box style={{ display: "flex", flexDirection: "column" }}>
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
              to={{ pathname: "/apply" }}
            >
              Apply for funding
            </Typography>
          </Box>
        </Toolbar>
      </Box>
    </Container>
  );
};
