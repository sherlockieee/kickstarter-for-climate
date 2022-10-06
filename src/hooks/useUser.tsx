import axios from "axios";
import { useEffect, useState } from "react";

type UserObject = {
	email: string;
	full_name: string;
	preferred_name: string;
	is_active: boolean;
	is_admin: boolean;
	id: string;
};
export function useUser() {
	const [user, setUser] = useState<UserObject | null>(null);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchCurrentUser = async () => {
			setIsLoading(true);
			const res = await axios.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:
							"Bearer " +
							JSON.parse(localStorage.getItem("token") || ""),
					},
				}
			);
			setUser(res.data);
			setIsError(false);
			setIsLoading(false);
		};

		fetchCurrentUser().catch((err) => {
			setUser(null);
			setIsError(true);
			setIsLoading(false);
		});
	}, []);

	return { user, isError, isLoading };
}
