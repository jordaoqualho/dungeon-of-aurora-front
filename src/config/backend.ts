import axios from "axios";

const backendUrl = import.meta.env.VITE_ENVIRONMENT === "development"
? (import.meta.env.VITE_LOCAL_BACKEND as string)
: (import.meta.env.VITE_PROD_BACKEND as string);

export const backend = axios.create({
  baseURL: backendUrl,
  // headers: { "api-key": config.apiKey },
});