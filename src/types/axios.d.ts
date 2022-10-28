import { AxiosResponse, AxiosRequestConfig } from "axios";

interface AxiosInstance {
	request<T = any, R = AxiosResponse<T>>(
		config: AxiosRequestConfig
	): Promise<R>;
	post<T = any, R = AxiosResponse<T>>(
		url: string,
		data?: T,
		config?: AxiosRequestConfig<T>
	): Promise<R>;
}
