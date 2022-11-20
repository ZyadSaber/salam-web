import React,{ useState, useEffect, useCallback } from "react";

//@ts-ignore
const usePost = (apiPost) => {
    const url = `http://144.24.209.19:9090/api/v1/${apiPost}`
    const [success, setSuccess] = useState(false)
    const [row, setRow] = useState<{}>()
    const postData = useCallback(async (dataToPost: any, link: string) => {
    await fetch(link, {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(dataToPost)
        });
    }, [])

useEffect(()=>{
    // console.log(row)
    // console.log(apiPost)
    if(apiPost && row){
    postData(row, url)
    }
}, [row, postData, url, success, apiPost])

      return{success, setRow}
}

export default usePost