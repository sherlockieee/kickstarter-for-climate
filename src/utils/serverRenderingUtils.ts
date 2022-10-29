import { useRouter } from "next/router";
export function useRefreshServerSidePage() {
	const router = useRouter();

	const refreshData = () => {
		router.replace(router.asPath);
	};

	return refreshData;
}
