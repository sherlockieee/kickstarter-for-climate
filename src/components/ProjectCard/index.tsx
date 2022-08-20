import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from "@material-ui/core";
import { Stack } from "@mui/system";
import { Project } from "../../types/projects";
import { ProgressBar } from "../ProgressBar";

export const ProjectCard = ({ proj }: { proj: Project }) => {
  return (
    <Card key={proj.id}>
      <CardActionArea>
        <CardContent>
          <Stack direction="column" spacing={1}>
            <Typography variant="h5" component="div">
              {proj.title}
            </Typography>
            <ProgressBar
              variant="determinate"
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
            <Typography variant="body1">{proj.description}</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
