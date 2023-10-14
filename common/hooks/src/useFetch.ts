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
  checkForParams?: boolean;
  onResponse?: (data: any) => void;
}

const useFetch = ({
  link = "",
  fetchOnFirstRun,
  //TODO: add request time out to fetch data
  // refreshTimeout,
  checkForParams = false,
  params,
  //TODO: check the noAuthorization for prop
  // noAuthorization = false,
  onResponse,
}: useFetchProp) => {
  const toast = useToast();
  const authorization = useCurrentAuthorization();
  //@ts-ignore
  const url = `http://144.24.209.19:9090/api/${API_ID[link]}`;
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(
    async (additionalParams?: any) => {
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
        const computedParams = { ...additionalParams, ...additionalParams };
        const response = await fetch(
          `${url}?${new URLSearchParams(computedParams)}`,
          settings
        );
        setLoading(false);
        const apiData = await response.json();
        setData(apiData);
        onResponse && onResponse(apiData);
      }
    },
    [authorization, onResponse, url]
  );

  useEffect(() => {
    if (fetchOnFirstRun && !checkForParams) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchOnFirstRun, authorization]);

  useEffect(() => {
    if (checkForParams && fetchOnFirstRun) {
      getData(params);
    }
  }, [fetchOnFirstRun, authorization, params, checkForParams, getData]);

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

  const resetData = useCallback(() => {
    setData(undefined);
  }, []);

  return {
    data,
    runFetch: getData,
    setData,
    loading,
    resetData,
  };
};

export default useFetch;
