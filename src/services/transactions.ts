import axios from "axios";
import Cookies from "js-cookie";

type Props = {
	quantity: number;
	amount: number;
	currency: "USD" | "EUR";
	project_id: number;
};
export async function createTransaction(data: Props) {
	const token = Cookies.get("token");
	const headers = { Authorization: `Bearer ${token}` };

	const res = await axios
		.post(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/transactions/`,
			(data = data),
			{ headers }
		)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err);
			return { err };
		});

	return res;
}
