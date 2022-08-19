import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#A1E855",
      contrastText: "#000000",
    },
    secondary: {
      main: "#5BC8EC",
      contrastText: "#000000",
    },
    error: {
      main: "#C95234",
      contrastText: "#fff"
    },
    background: {
      default: "white",
    },
  },
});


export default theme;
