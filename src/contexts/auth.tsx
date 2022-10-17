import React, { createContext, useState, useContext, useEffect } from "react";
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
		loading: boolean;
		logout: ({ redirectLocation }: { redirectLocation: string }) => void;
	}
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		async function loadUserFromCookies() {
			const token = Cookies.get("token");
			if (token) {
				const { data: user } = await getCurrentUser(token);
				if (user) setUser(user);
			}
			setLoading(false);
		}
		loadUserFromCookies();
	}, []);

	async function login(input: { email: string; password: string }) {
		const { data: token } = await getToken(input);
		if (token) {
			Cookies.set("token", token, { expires: 60 });
			const { data: user } = await getCurrentUser(token);
			console.log(user);
			setUser(user);
		}
	}

	function logout({ redirectLocation }: { redirectLocation?: string }) {
		Cookies.remove("token");
		setUser(null);
		router.push(redirectLocation || "/projects");
	}

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: !!user,
				user,
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
