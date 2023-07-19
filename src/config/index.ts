const config = {
  google_client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  backendUrl: import.meta.env.VITE_BACKEND_URL,
  // environment: import.meta.env.VITE_ENVIRONMENT,
  // apiKey: import.meta.env.VITE_API_KEY,
  // persist: persist,
};

// if (import.meta.env.VITE_ENVIRONMENT === "development") {
//   config.backendUrl = import.meta.env.VITE_BACKEND_URL_LOCAL;
// }

export default config;
