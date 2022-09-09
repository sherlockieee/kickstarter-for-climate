import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { NextLinkComposed } from "../../components/Link";

import { Theme } from "@material-ui/core";

const useImageStyle = makeStyles<Theme>((theme) => ({
  introImage: {
    position: "relative",
    objectFit: "fill",
    objectPosition: "center",
    transform: "none",
    left: "0%",
    top: "0%",
    height: "auto",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      objectFit: "cover",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      height: "100%",
    },
  },
}));

export const IntroSection = () => {
  const classes = useImageStyle();

  return (
    <Grid
      container
      spacing={4}
      style={{ marginTop: "3rem", marginBottom: "6rem" }}
    >
      <Grid
        item
        xs={12}
        md={5}
        style={{
          padding: "2rem 5rem",
          alignSelf: "center",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Crowdfund climate projects
        </Typography>
        <Typography variant="body1" gutterBottom>
          The climate is on fire and you can help! Crowdfund carbon removal
          projects and get future carbon credits to support projects from around
          the world.
        </Typography>
        <Box style={{ display: "flex", gap: `1rem`, marginTop: "1rem" }}>
          <Button
            variant="outlined"
            color="primary"
            component={NextLinkComposed}
            to={{ pathname: "/apply" }}
          >
            Apply for funding{" "}
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={NextLinkComposed}
            to={{ pathname: "/projects" }}
          >
            Browse projects
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={7} style={{ width: "100%", position: "relative" }}>
        <img
          className={classes.introImage}
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
      </Grid>
    </Grid>
  );
};
