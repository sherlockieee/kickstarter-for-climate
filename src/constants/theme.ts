import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#01890C",
      contrastText: "#fff",
    },
    secondary: {
      main: "#41428",
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
