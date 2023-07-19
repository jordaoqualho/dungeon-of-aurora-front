import { fetcher } from "@/api/fetcher";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export type UseFetchState<T> = {
  data: T | unknown;
  loading: boolean;
  error: AxiosError | null;
};

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export function useFetch<T = any>(url: string, method: HttpMethod = "GET") {
  const [state, setState] = useState<UseFetchState<AxiosResponse>>({
    data: null,
    loading: false,
    error: null,
  });

  const sendRequest = (method: HttpMethod, data?: T | null) => {
    setState((prevState) => ({ ...prevState, loading: true }));

    const requestConfig = {
      url,
      method,
      data,
    };

    fetcher(requestConfig)
      .then((response) => {
        setState({ data: response.data, loading: false, error: null });
      })
      .catch((err: AxiosError) => {
        setState({ data: null, loading: false, error: err });
      });
  };

  useEffect(() => {
    sendRequest(method);
  }, [url]);

  const refetch = () => {
    sendRequest(method);
  };

  return [{ ...state }, refetch];
}

/*
usage

const [data, loading, error] = useFetch("/random");


*/
