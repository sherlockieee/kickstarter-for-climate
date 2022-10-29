import axios from "axios";

type TokenProps = {
	email: string;
	password: string;
};

export const getCurrentUser = async (token: string) => {
	const res = await axios
		.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token || "",
			},
		})
		.catch((err) => {
			return { data: null };
		});
	return res;
};

export async function getToken({ email, password }: TokenProps) {
	const formData = new FormData();
	formData.append("username", email);
	formData.append("password", password);
	const res = await axios
		.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`, formData)
		.then((res) => {
			return {
				is_error: false,
				data: res.data.access_token,
				msg: "",
			};
		})
		.catch((err) => {
			console.error(err);
			return { is_error: true, msg: err.msg, data: {} };
		});
	return res;
}

type UserResponse = {
	is_error: boolean;
	user: string;
	msg: string;
};

type CreateUserProps = {
	full_name: string;
	preferred_name: string;
	email: string;
	password: string;
};

export async function createUser(input: CreateUserProps) {
	const res = await axios
		.post<UserResponse>(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/signup`,
			input
		)
		.then((res) => {
			return {
				is_error: false,
				user: res.data,
				msg: "Your account has been created! Sign in now.",
			};
		})
		.catch((err) => {
			console.error(err);
			return { is_error: true, msg: err.msg, user: "" };
		});
	return res;
}
