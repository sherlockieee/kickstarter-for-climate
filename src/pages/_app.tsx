import { NextPage } from "next";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import { ThemeProvider } from "@material-ui/core";

import theme from "../constants/theme";
import "../styles/global.css";
import { AuthProvider } from "../contexts/auth";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type CustomPage = NextPage & {
	requiresAuth?: boolean;
	redirectUnauthenticatedTo?: string;
};
interface CustomAppProps extends Omit<AppProps, "Component"> {
	Component: CustomPage;
	emotionCache?: EmotionCache;
}

export default function MyApp(props: CustomAppProps) {
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
				<title>Crex | Crowdfund Climate Project</title>
				<meta
					name="description"
					content="Crowdfunding platform for climate  projects."
				/>
				{Component.requiresAuth && (
					<script
						// If no token is found, redirect inmediately
						dangerouslySetInnerHTML={{
							__html: `if(!document.cookie || document.cookie.indexOf('token') === -1)
				 {location.replace(
				   "/login?redirectTo=" +
					 encodeURIComponent(location.pathname + location.search)
				 )}
				 else {document.documentElement.classList.add("render")}`,
						}}
					/>
				)}
			</Head>
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<Component {...pageProps} />
				</AuthProvider>
				<CssBaseline />
			</ThemeProvider>
		</CacheProvider>
	);
}
