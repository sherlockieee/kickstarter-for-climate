import { styled } from "@mui/material/styles";
import { LinearProgress } from "@material-ui/core";
import { linearProgressClasses } from "@mui/material";

export const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));
