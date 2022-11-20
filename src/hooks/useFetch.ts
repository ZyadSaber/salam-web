import React,{ useState, useEffect, useCallback } from "react";

const useFetch = (link : string) => {
  const url = `http://144.24.209.19:9090/api/v1/${link}`
    const [data, setData] = useState<any>([]);
    const [run, setRun] = useState(false)

const getData = useCallback(async(link: string)=>{
    const response=await fetch(link);
    const apiData=await response.json();  
  setData(apiData);
},[])

    useEffect(() => {
      getData(url)
      setRun(false)
      }, [getData, url, run]);

      return{data, setRun, setData}
}

export default useFetch