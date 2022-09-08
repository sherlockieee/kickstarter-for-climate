import { createTheme } from "@material-ui/core/styles";

const core = {
  darkGreen: '#0B3830',
  lightPink: '#FFE5D2',
  gold: '#FBB90F',
  white: '#FFFFFF',
  black: '#000000',
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: core.darkGreen,
    },
    primary: {
      main: core.gold,
      contrastText: core.black,
    },
    secondary: {
      main: core.lightPink,
      contrastText: core.black,
    },
    error: {
      main: "#C95234",
      contrastText: core.white,
    },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    allVariants: {
      color: core.lightPink,
    },
    h1: {
      fontFamily: "'Marcellus', serif",
      color: core.gold,
    },
    h2: {
      fontFamily: "'Marcellus', serif",
      color: core.gold,
    }, h3: {
      fontFamily: "'Marcellus', serif",color: core.gold,
    }, h4: {
      fontFamily: "'Marcellus', serif",color: core.gold,
    }, h5: {
      fontFamily: "'Marcellus', serif",color: core.gold,
    }, h6: {
      fontFamily: "'Marcellus', serif",color: core.gold,
    }
    
  }
});


export default theme;
