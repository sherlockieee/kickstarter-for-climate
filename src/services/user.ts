import axios from "axios";

type TokenResponse = {
	is_error: boolean;
	token: string;
	msg: string;
};

type Props = {
	email: string;
	password: string;
};

export async function getToken({ email, password }: Props) {
	const formData = new FormData();
	formData.append("username", email);
	formData.append("password", password);
	const res = await axios
		.post<TokenResponse>(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`,
			formData
		)
		.then((res) => {
			return {
				is_error: false,
				token: res.data,
				msg: "",
			};
		})
		.catch((err) => {
			console.error(err);
			return { is_error: true, msg: err.msg, token: "" };
		});
	return res;
}
