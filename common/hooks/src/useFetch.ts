import { useState, useEffect, useCallback } from "react";
import { API_ID } from "@commons/global";
import { useCurrentAuthorization } from "@commons/hooks";
import { useToast } from "@chakra-ui/react";

interface useFetchProp {
  link: string;
  fetchOnFirstRun?: boolean;
  refreshTimeout?: number;
  params?: any;
  noAuthorization?: boolean;
}

const useFetch = ({
  link = "",
  fetchOnFirstRun,
  refreshTimeout,
  params,
  noAuthorization = false,
}: useFetchProp) => {
  const toast = useToast();
  const authorization = useCurrentAuthorization();
  //@ts-ignore
  const url = `http://144.24.209.19:9090/api/${API_ID[link]}`;
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    if (authorization) {
      const settings = {
        // method: "FETCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorization}`,
        },
      };
      const response = await fetch(
        `${url}?${new URLSearchParams(params)}`,
        settings
      );
      setLoading(false);
      const apiData = await response.json();
      setData(apiData);
    }
  }, [authorization, params, url]);

  useEffect(() => {
    if (fetchOnFirstRun) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchOnFirstRun, authorization]);

  useEffect(() => {
    if (data && data.response) {
      toast({
        position: "top-right",
        title: "error",
        description: `${JSON.stringify(data.response)}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [data, toast]);

  const runFetch = useCallback(() => {
    getData();
  }, [getData]);

  return { data, runFetch, setData, loading };
};

export default useFetch;
