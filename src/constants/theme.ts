import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#19A925",
      contrastText: "#fff",
    },
    secondary: {
      main: "#27233A",
      contrastText: "#fff",
    },
    error: {
      main: "#C95234",
      contrastText: "#fff"
    },
    background: {
      default: "white",
    },
  }
});


export default theme;
