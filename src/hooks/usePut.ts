import React,{ useState, useEffect, useCallback } from "react";

//@ts-ignore
const usePut = (link) => {
    const [id, setId] = useState<number>()
    const url = `http://localhost:8000/${link}/${id}`
    const [success, setSuccess] = useState(false)
    const [row, setRow] = useState<{}>()
    const putData = useCallback(async (dataToPut: any, link: string) => {
        await fetch(link, {
            method: "PUT",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(dataToPut)
        });
        setSuccess(true)
    }, [])

useEffect(()=>{
    if(link && row){
    putData(row, url)
    }
}, [link, row, putData, url])

      return{success, setRow, setId}
}

// export default usePut