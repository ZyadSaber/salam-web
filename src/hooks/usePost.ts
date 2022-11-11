import React,{ useState, useEffect, useCallback } from "react";

//@ts-ignore
const usePost = (link) => {
    const url = `http://localhost:8000/${link}`
    const [success, setSuccess] = useState(false)
    const [row, setRow] = useState<{}>()
    const postData = useCallback(async (dataToPost: any, link: string) => {
        await fetch(link, {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(dataToPost)
        });
        setSuccess(true)
    }, [])

useEffect(()=>{
    if(link && row){
    postData(row, url)
    }
}, [link, row, postData, url, success])

      return{success, setRow}
}

export default usePost