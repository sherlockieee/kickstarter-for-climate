import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../constants/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { ThemeProvider } from "@material-ui/core";

import "../styles/global.css";
import { AuthProvider } from "../contexts/auth";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
				<title>X | Kickstarter for climate</title>
				<meta
					name="description"
					content="Crowdfunding platform for climate  projects."
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AuthProvider>
					<Component {...pageProps} />
				</AuthProvider>
			</ThemeProvider>
		</CacheProvider>
	);
}
