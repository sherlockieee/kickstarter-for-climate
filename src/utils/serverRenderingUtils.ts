import { useRouter } from "next/router";
export function refreshServerSidePage() {
	const router = useRouter();

	const refreshData = () => {
		router.replace(router.asPath);
	};

	return refreshData;
}
