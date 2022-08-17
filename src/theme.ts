import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#00000',
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "white",
    },
  },
});

export default theme;
