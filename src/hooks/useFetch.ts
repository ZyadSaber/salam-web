import { useState, useEffect, useCallback } from "react";

interface useFetchProp {
  link: string;
  fetchOnFirstRun?: boolean;
  refreshTimeout?: number;
  params?: any
}

const useFetch = ({link, fetchOnFirstRun, refreshTimeout, params}: useFetchProp) => {
  // const url = `http://144.24.209.19:9090/api/v1/${link}`
  const url = `http://127.0.0.1:9090/api/v1/${link}`
  // const url = `http://192.168.1.250:9090/api/v1/${link}`
    const [data, setData] = useState<any>([]);
    const [runFetch, setRunFetch] = useState(false);
const getData = useCallback(async(link: string)=>{
    const response=await fetch(link + "?" + new URLSearchParams(params));
    const apiData=await response.json();  
  setData(apiData);
},[params])

    useEffect(() => {
      if(fetchOnFirstRun){
        setRunFetch(true)
        getData(url)
      }
      }, [fetchOnFirstRun, getData, url, params]);



      const refresh = ()=>{
          getData(url)
      }

      const handleTimeOUt = ()=>{
        if(runFetch || fetchOnFirstRun){
          refresh()
        }
      }
      
      // setInterval(handleTimeOUt, 60000)
      // setTimeout(handleTimeOUt, 60000)s

      return{data, refresh, setData}
}

export default useFetch