export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export type FetcherConfig = {
  method: HttpMethod;
  url: string;
};
