import { Box, LinearProgress, LinearProgressProps } from "@material-ui/core";

export const ProgressBar = (props: LinearProgressProps) => {
  return (
    <Box>
      <LinearProgress
        style={{
          height: 10,
          borderRadius: 5,
        }}
        {...props}
      />
    </Box>
  );
};
