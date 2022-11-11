import React,{ useState, useEffect, useCallback } from "react";

const useFetch = (link : string) => {
  const url = `http://127.0.0.1:3001/api/v1/${link}`
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