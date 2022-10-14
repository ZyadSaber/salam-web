import { useState, useEffect, useCallback } from "react";

const useFetch = (url : string) => {
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