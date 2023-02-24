import { useState, useEffect, useCallback } from "react";
import API_ID from "../global/api";
import useLoacalStorage from "./useLocalStorage";

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
  const { authorization } = useLoacalStorage()
  //@ts-ignore
  const url = `http://144.24.209.19:9090/api/v1/${API_ID[link]}`
  // const url = `http://127.0.0.1:9090/api/v1/${link}`
  // const url = `http://192.168.1.250:9090/api/v1/${link}`
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



      const runFetch = useCallback(()=>{
        console.log(link)
          getData()
      },[getData, link])

      return{data, runFetch, setData}
}

export default useFetch