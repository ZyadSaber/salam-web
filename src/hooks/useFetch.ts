import { useState, useEffect, useCallback } from "react";

const useFetch = (url : string) => {
    const [data, setData] = useState<any>([]);

const getData = useCallback(async(link: string)=>{
    const response=await fetch(link);
    const apiData=await response.json();  
  setData([apiData][0].data);
},[])

    useEffect(() => {
      getData(url)
      }, [getData, url]);

      return{data}
}

export default useFetch