import { Button, Typography } from "@material-ui/core";
import { Container } from "@mui/material";
import { NextLinkComposed } from "../components/Link";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" gutterBottom>
          Crowdfunding for climate projects
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Pre-order carbon credits from your favorite projects, allow for
          funding 10x faster, all the while making our planet a better place!{" "}
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
