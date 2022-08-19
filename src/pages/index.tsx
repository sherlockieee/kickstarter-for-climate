import { Button } from "@material-ui/core";
import { Container } from "@mui/material";
import { useTheme } from "@material-ui/core/styles";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="lg">
        <h1>Crowdfunding for climate projects</h1>
        <p>
          Pre-order carbon credits from your favorite projects, allow for
          funding 10x faster, all the while making our planet a better place!{" "}
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="outlined" color="primary">
            Apply for funding
          </Button>
          <Button variant="contained" color="primary">
            Browse projects
          </Button>
        </div>
      </Container>
    </>
  );
}
