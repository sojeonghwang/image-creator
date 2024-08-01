import { useCallback, useState } from "react";

interface ApiResponse<T> {
  data?: T;
  errorMessage?: string;
  isSuccess?: boolean;
}

interface useApiRequestReturnInterface<T> {
  response: ApiResponse<T>;
  sendRequest: (
    url: string,
    options: RequestInit,
    body: any
  ) => Promise<ApiResponse<T>>;
  loading: boolean;
}

/**
 * 반복되는 fetch 문 hooks로 변경
 */
function useApiRequest<T>(): useApiRequestReturnInterface<T> {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse<T>>({});

  const sendRequest = useCallback(
    async (
      url: string,
      options: RequestInit,
      body: any
    ): Promise<ApiResponse<T>> => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          ...options,
          body: JSON.stringify(body),
        });

        const result = await res.json();

        if (!res.ok) {
          setResponse({
            errorMessage: result.message ?? "에러가 발생했습니다.",
            isSuccess: false,
          });

          return {
            errorMessage: result.message ?? "에러가 발생했습니다.",
            isSuccess: false,
          };
        } else {
          setResponse({ data: result.data, isSuccess: true });
          return { data: result.data, isSuccess: true };
        }
      } catch (exception) {
        setResponse({ errorMessage: "에러가 발생했습니다.", isSuccess: false });
        console.error(`[request error in catch] - ${exception}`);
        return { errorMessage: "에러가 발생했습니다.", isSuccess: false };
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { response, sendRequest, loading };
}

export default useApiRequest;
