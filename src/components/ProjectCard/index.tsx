import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@material-ui/core";
import { Stack } from "@mui/system";
import { Project } from "../../types/projects";
import { formatCurrency } from "../../utils/formatCurrency";
import { ProgressBar } from "../ProgressBar";

export const ProjectCard = ({ proj }: { proj: Project }) => {
  return (
    <Card
      key={proj.id}
      raised={false}
      style={{
        borderRadius: 16,
        border: "1px solid lightgray",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Stack direction="column" spacing={1}>
          <Typography variant="h5" component="div">
            {proj.title}
          </Typography>
          <div>
            <Typography variant="h6" style={{ display: "inline" }}>
              {formatCurrency({
                value: proj.total_raised,
                currency: proj.currency,
              })}
            </Typography>
            <Typography style={{ display: "inline" }}> raised by </Typography>
            <Typography variant="h6" style={{ display: "inline" }}>
              {proj.total_backers}
            </Typography>{" "}
            <Typography style={{ display: "inline" }}>backers</Typography>
          </div>
          <ProgressBar
            value={(proj.total_raised / proj.funding_needed) * 100}
          />
          <Stack direction="row" spacing={1}>
            {proj.tags.map((tag) => (
              <Chip
                label={tag.name}
                key={tag.id}
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
          <Typography variant="body1" paragraph>
            {proj.description}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="medium" variant="text" color="secondary">
          Read more
        </Button>
        <Button size="medium" variant="contained" color="secondary">
          Back project
        </Button>
      </CardActions>
    </Card>
  );
};
