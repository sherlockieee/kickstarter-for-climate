import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { Layout } from "../../components/Layout";
import { useAuth } from "../../contexts/auth";
import { getTransactionsForOneProject } from "../../services/transactions";

const TransactionPage = ({ allTransactions, project_id }) => {
	const { user } = useAuth();

	if (!user) {
		return (
			<Layout>
				<CircularProgress />
			</Layout>
		);
	}

	return (
		<Layout>
			<Typography variant="h1" align="center" gutterBottom>
				Receipts for project {project_id}
			</Typography>
		</Layout>
	);
};

export async function getServerSideProps(context) {
	const { tid } = context.params;
	const token = context.req.cookies["token"];

	const allTransactions = await getTransactionsForOneProject(tid, token);
	return { props: { allTransactions, project_id: tid } };
}

TransactionPage.requiresAuth = true;
TransactionPage.redirectUnauthenticatedTo = "/login";

export default TransactionPage;
