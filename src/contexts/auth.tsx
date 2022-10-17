import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	Component,
} from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { getToken, getCurrentUser } from "../services/user";

const AuthContext = createContext(
	{} as {
		isAuthenticated: boolean;
		user: any;
		login: ({
			email,
			password,
		}: {
			email: string;
			password: string;
		}) => Promise<void>;
		authenticate: (token: string) => Promise<void>;
		loading: boolean;
		logout: ({ redirectLocation }: { redirectLocation: string }) => void;
	}
);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const isAuthenticated = !!user;

	async function login(input: { email: string; password: string }) {
		setLoading(true);
		const { data: token } = await getToken(input);
		if (token) {
			await authenticate(token);
		}
		setLoading(false);
	}

	async function authenticate(token: string) {
		setLoading(true);
		Cookies.set("token", token, { expires: 60 });
		const { data: user } = await getCurrentUser(token);
		setUser(user);
		setLoading(false);
	}

	function logout({ redirectLocation }: { redirectLocation: string }) {
		Cookies.remove("token");
		setUser(null);
		router.push(redirectLocation || "/projects");
	}

	useEffect(() => {
		const token = Cookies.get("token");
		if (!token) return;
		authenticate(token);
	}, []);

	useEffect(() => {
		const Component = children.type;
		// If it doesn't require auth, everything's good.
		console.log(Component.requiresAuth);
		if (!Component.requiresAuth) return;

		// If we're already authenticated, everything's good.
		if (isAuthenticated) return;

		// If we don't have a token in the cookies, logout
		const token = Cookies.get("token");
		if (!token) {
			return logout({
				redirectLocation: Component.redirectUnauthenticatedTo,
			});
		}
		// If we're not loading give the try to authenticate with the given token.
		if (!loading) {
			authenticate(token);
		}
	}, [loading, isAuthenticated, children.type.requiresAuth]);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				user,
				authenticate,
				login,
				loading,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
