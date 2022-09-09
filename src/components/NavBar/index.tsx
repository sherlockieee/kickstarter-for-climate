import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import theme from "../../constants/theme";
import Button from "../Button";

export const NavBar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        color="transparent"
        position="sticky"
        style={{ boxShadow: "none", padding: "1rem" }}
      >
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1, boxShadow: "none" }}>
            X | Kickstarter for Climate
          </Typography>
          <Box style={{ display: "flex", gap: `0.5rem` }}>
            <Button variant="outlined" color="primary">
              Apply for funding{" "}
            </Button>
            <Button variant="contained" color="primary">
              Browse projects
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
