import { useState, useEffect, useCallback } from "react";
import useLoacalStorage from "./useLocalStorage";

//@ts-ignore
const usePost = (apiPost) => {

    const url = `http://144.24.209.19:9090/api/v1/${apiPost}`
    // const url = `http://127.0.0.1:9090/api/v1/${apiPost}`
    const [success, setSuccess] = useState()
    const { authorization } = useLoacalStorage()
    const postData = useCallback(async (dataToPost: any, link: string) => {
        dataToPost.authorization = authorization
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToPost)
        };
        try {
            const fetchResponse = await fetch(url, settings);
            const data = await fetchResponse.json();
            setSuccess(data)
            return data
        } catch (e) {
            console.log(e)
        }
    }, [authorization, url])

    const setRow = useCallback((row: any) => {
        postData(row, url)
    }, [postData, url])

    return { success, setRow }
}

export default usePost