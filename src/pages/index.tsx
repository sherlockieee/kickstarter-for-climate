import { Button, Typography } from "@material-ui/core";
import { Container } from "@mui/material";
import { NextLinkComposed } from "../components/Link";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" gutterBottom>
          Crowdfund climate projects
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          The climate is on fire and you can help! Crowdfund carbon removal
          projects and get future carbon credits to support projects from around
          the world.
        </Typography>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="secondary"
            component={NextLinkComposed}
            to={{ pathname: "/apply" }}
          >
            Apply for funding
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={NextLinkComposed}
            to={{ pathname: "/projects" }}
          >
            Browse projects
          </Button>
        </div>
      </Container>
    </>
  );
}
