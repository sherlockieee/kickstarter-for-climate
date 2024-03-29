import { createTheme } from "@mui/material/styles";

export const core = {
	darkGreen: "#0B3830",
	lightPink: "#FFE5D2",
	gold: "#FBB90F",
	white: "#FFFFFF",
	black: "#000000",
};

// Create a theme instance.
const theme = createTheme({
	spacing: 8,
	palette: {
		background: {
			default: core.darkGreen,
		},
		primary: {
			main: core.gold,
			contrastText: core.darkGreen,
		},
		secondary: {
			main: core.lightPink,
			contrastText: core.darkGreen,
		},
		error: {
			main: "#C95234",
			contrastText: core.white,
		},
		info: {
			main: core.white,
		},
	},
	typography: {
		fontFamily: "'DM Sans', sans-serif",
		fontSize: 16,
		allVariants: {
			color: core.lightPink,
		},
		h1: {
			fontFamily: "'Marcellus', serif",
			color: core.gold,
			fontSize: "4.5rem",
		},
		h2: {
			fontFamily: "'Marcellus', serif",
			color: core.gold,
			fontSize: "3rem",
		},
		h3: {
			fontFamily: "'Marcellus', serif",
			color: core.gold,
			fontSize: "2rem",
		},
		h4: {
			fontFamily: "'Marcellus', serif",
			color: core.gold,
		},
		h5: {
			fontFamily: "'Marcellus', serif",
			color: core.gold,
		},
		h6: {
			fontFamily: "'Marcellus', serif",
			color: core.gold,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					padding: "0.75rem 1rem",
					fontFamily: "'DM Sans', sans-serif",
					textTransform: "none",
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: "none",
					"&:hover": {
						color: core.gold,
					},
				},
			},
		},
	},
});

declare module "@mui/material/styles" {
	interface Palette {
		neutral: Palette["primary"];
	}

	// allow configuration using `createTheme`
	interface PaletteOptions {
		neutral?: PaletteOptions["primary"];
	}
}

export default theme;
