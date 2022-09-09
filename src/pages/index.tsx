import { Box, Button, Typography } from "@material-ui/core";
import { Container } from "@mui/material";
import { NextLinkComposed } from "../components/Link";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" gutterBottom>
          Crowdfund climate projects
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          The climate is on fire and you can help! Crowdfund carbon removal
          projects and get future carbon credits to support projects from around
          the world.
        </Typography>
        <Box style={{ display: "flex", gap: `1rem` }}>
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
      </Container>
    </>
  );
}
