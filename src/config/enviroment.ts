import { Enviroment } from "@/types";

export const env: Enviroment = {
  google_client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
  backendUrl:
    import.meta.env.VITE_ENVIRONMENT === "development"
      ? (import.meta.env.VITE_LOCAL_BACKEND as string)
      : (import.meta.env.VITE_PROD_BACKEND as string),
}
