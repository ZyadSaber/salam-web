import React,{ useState, useEffect, useCallback } from "react";

//@ts-ignore
const useDelete = (link) => {
    const [id, setId] = useState<number>()
    const url = `http://localhost:8000/${link}/${id}`
    const [success, setSuccess] = useState(false)
    const [row, setRow] = useState<{}>()
    const deleteData = useCallback(async (dataToDelete: any, link: string) => {
        await fetch(link, {
            method: "DELETE",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(dataToDelete)
        });
        setSuccess(true)
    }, [])

useEffect(()=>{
    if(link && row){
    deleteData(row, url)
    }
}, [link, row, deleteData, url, id])

      return{success, setRow, setId}
}

// export default useDelete