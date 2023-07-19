import config from "@/config";
import axios from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type RequestConfig = {
  method: HttpMethod;
  url: string;
};

const api = axios.create({
  baseURL: config.backendUrl,
});

export const fetcher = <T>(requestConfig: RequestConfig) => {
  return api.request<T>(requestConfig);
};
