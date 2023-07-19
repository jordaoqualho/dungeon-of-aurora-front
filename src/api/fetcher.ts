import axios from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type RequestConfig = {
  method: HttpMethod;
  url: string;
};

const api = axios.create({
  // baseURL: process.env.REACT_APP_BACKEND_URL,
  baseURL: "https://animechan.xyz/api",
});

export const fetcher = <T>(requestConfig: RequestConfig) => {
  return api.request<T>(requestConfig);
};
