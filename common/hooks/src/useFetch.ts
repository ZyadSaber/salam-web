import { useState, useEffect, useCallback } from "react";
import { API_ID } from "@commons/global";
import { 
  useCurrentAuthorization, 
  usePrevious
 } from "@commons/hooks";
import { useToast } from "@chakra-ui/react";
// import {objectIs} from "@commons/helpers"

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
  noAuthorization = false,
  onResponse,
}: useFetchProp) => {
  
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const useAuthorization = useCurrentAuthorization();
  const baseNextParams = params || {};
  const [actualParams, setActualParams] = useState(baseNextParams)
  const previousParams = usePrevious(actualParams);

  // const hasParamsChanged = useCallback(
  //   () => !objectIs(previousParams, baseNextParams),
  //   [baseNextParams, previousParams]
  // );

    //@ts-ignore
  const url = `http://144.24.209.19:9090/api/${API_ID[link]}`;

  const generateBasicRequest = useCallback(
    async ({params, authorization}:any) => {
      setLoading(true);
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        const response = await fetch(
          `${url}?${new URLSearchParams(params)}`,
          {
            headers: authorization ? {...headers, Authorization: `Bearer ${authorization}`} : headers
          }
        );
        setLoading(false);
        const apiData = await response.json();
        setData(apiData);
        onResponse && onResponse(apiData);
        if (apiData && apiData?.response) {
          toast({
            position: "top-right",
            title: "error",
            description: `${JSON.stringify(apiData?.response)}`,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
    },
    [onResponse, toast, url]
  );

    // useEffect(() => {
  //   if (checkForParams && fetchOnFirstRun) {
  //     getData(params);
  //   }
  // }, [fetchOnFirstRun, authorization, params, checkForParams, getData]);

  useEffect(() => {
    if (useAuthorization && !checkForParams && fetchOnFirstRun) {
      generateBasicRequest({params: baseNextParams, authorization: useAuthorization});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useAuthorization, checkForParams]);

  useEffect(() => {
    if (useAuthorization && checkForParams && fetchOnFirstRun) {
      generateBasicRequest({params: baseNextParams, authorization: useAuthorization});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useAuthorization, checkForParams, params]);


  // useEffect(() => {
  //   if (checkForParams && fetchOnFirstRun) {
  //     getData(params);
  //   }
  // }, [fetchOnFirstRun, authorization, params, checkForParams, getData]);

  const resetData = useCallback(() => {
    setData(undefined);
  }, []);
  
  const runFetch = (e?:any)=>{
    if(e){
      setActualParams(e)
      generateBasicRequest({params: e, authorization: useAuthorization})
    }else{
      generateBasicRequest({params: previousParams, authorization: useAuthorization})
    }
  }

  return {
    data,
    runFetch,
    setData,
    loading,
    resetData,
  };
};

export default useFetch;
