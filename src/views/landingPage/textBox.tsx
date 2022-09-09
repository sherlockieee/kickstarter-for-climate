import { Container, Grid, Typography } from "@material-ui/core";

export const TextBox = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} style={{ marginTop: "3rem" }}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            padding: "1rem 4rem",
            alignSelf: "center",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h3" align="center">
            The future needs carbon removal.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            align="center"
            style={{
              padding: "1rem 4rem",
              boxSizing: "border-box",
            }}
          >
            As the climate is expected to warm up to 4 degrees, we need urgent
            action now. To reverse this course of action, we need carbon removal
            to give us buffer time for decarbonization, and to remove already
            existing carbon in the air from the past.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
