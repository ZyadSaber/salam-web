import { useState, useEffect, useCallback } from "react";
import {API_ID} from "@commons/global";
import { useLocalStorage } from "@commons/hooks";
import { useToast } from '@chakra-ui/react';

interface useFetchProp {
  link: string;
  fetchOnFirstRun?: boolean;
  refreshTimeout?: number;
  params?: any
  noAuthorization?: boolean
}

const useFetch = ({
    link = "", 
    fetchOnFirstRun,
    refreshTimeout,
    params, 
    noAuthorization = false
  }: useFetchProp) => {
    const toast = useToast()
  const { authorization } = useLocalStorage()
  //@ts-ignore
  const url = `http://144.24.209.19:9090/api/v1/${API_ID[link]}`
  const [data, setData] = useState<any>([]);
  const getData = useCallback(async()=>{
    if(authorization || noAuthorization){
const response = await fetch(`${url}?authorization=${authorization}&${new URLSearchParams(params)}`)
    const apiData=await response.json();  
  setData(apiData);
    }
},[authorization, noAuthorization, params, url])


    useEffect(() => {
      if(fetchOnFirstRun){
        getData()
      }
      }, [fetchOnFirstRun, getData, url, params]);

      useEffect(()=>{
        if (data.response){
          toast({
            position: "top-right",
            title: 'error',
            description: `${JSON.stringify(data.response)}`,
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
        }
      }, [data, toast])



      const runFetch = useCallback(()=>{
          getData()
      },[getData])

      return{data, runFetch, setData}
}

export default useFetch