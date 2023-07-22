export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export type HttpHeaders = {
  Authorization?: string;
  Accept?: string;
};
export type FetcherConfig = {
  method: HttpMethod;
  url: string;
  headers?: HttpHeaders;
};
