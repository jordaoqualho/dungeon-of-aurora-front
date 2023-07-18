import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type UseFetchState<T> = {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
};

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export function useFetch<T>(url: string, method: HttpMethod = "GET") {
  const [state, setState] = useState<UseFetchState<T>>({
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

    axios(requestConfig)
      .then((response: AxiosResponse<T>) => {
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

  return { ...state, refetch };
}
