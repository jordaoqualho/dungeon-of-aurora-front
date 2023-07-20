import config from "@/config";
import { FetcherConfig } from "@/types/fetcher";
import axios from "axios";

const api = axios.create({
  baseURL: config.backendUrl,
});

export const fetcher = <T>(requestConfig: FetcherConfig) => {
  return api.request<T>(requestConfig);
};
