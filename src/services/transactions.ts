import axios from "axios";
import Cookies from "js-cookie";
import { useAuth } from "../contexts/auth";
import { Project } from "../types/projects";

type Props = {
	quantity: number;
	amount: number;
	currency: "USD" | "EUR";
	project: Project;
};

export async function createPaymentSession(data: Props) {
	const token = Cookies.get("token");
	const headers = {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json",
	};

	const { quantity, amount, currency, project } = data;

	const url = await axios
		.post(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/transactions/create-checkout-session`,
			{
				project_id: project.id,
				quantity,
				amount,
				currency,
				successUrl: `${
					process.env.DOMAIN_URL || "http://localhost:3000"
				}/checkout/success`,
				cancelUrl: `${
					process.env.DOMAIN_URL || "http://localhost:3000"
				}/checkout/cancel`,
			},
			{ headers }
		)
		.then((source) => source.data)
		.catch((e) => console.log(e));

	console.log({ url });
	return url;
}
export async function createTransaction({
	quantity,
	amount,
	currency,
	project,
}: Props) {
	const token = Cookies.get("token");
	const headers = { Authorization: `Bearer ${token}` };

	const res = await axios
		.post(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/transactions/`,
			{
				quantity,
				amount,
				currency,
				project_id: project.id,
			},
			{ headers }
		)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err);
			return { err };
		});

	return res;
}

export async function getTransactionsForOneProject(id: string, token?: string) {
	if (!token) {
		token = Cookies.get("token");
	}
	const headers = { Authorization: `Bearer ${token}` };

	const res = await axios
		.get(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/transactions/project/${id}`,
			{ headers }
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.error(err);
		});

	return res;
}
