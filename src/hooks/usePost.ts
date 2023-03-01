import { useState, useCallback } from "react";
import useLoacalStorage from "./useLocalStorage";
import API_ID from "../global/api";
import { useToast } from '@chakra-ui/react';

interface usePostProps{
    link: string;
    noAuthorization?: boolean
};
interface successType{
    response: string;
}

const usePost = ({
    link  = "",
    noAuthorization = false
}: usePostProps) => {
    const toast = useToast()
    //@ts-ignore
    const url = `http://144.24.209.19:9090/api/v1/${API_ID[link]}`
    // const url = `http://127.0.0.1:9090/api/v1/${link}`
    // const url = `http://192.168.1.250:9090/api/v1/${link}`
    const [success, setSuccess] = useState<successType>()
    const { authorization } = useLoacalStorage()
    const postData = useCallback(async (dataToPost: any) => {
        if(authorization || noAuthorization){
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
            if (data.response === "success"){
            toast({
            position: "top-right",
            title: 'Success',
            description: `${data.response}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
            } else {
                toast({
            position: "top-right",
            title: 'Error',
            description: `${data.response}`,
            status: 'error',
            duration: 9000,
            isClosable: true,
        })
            }
            setSuccess(data)
            return data
        } catch (e) {
            console.log(e)
        }}
    }, [authorization, noAuthorization, toast, url])

    const setRow = useCallback((row: any) => {
        postData(row)
    }, [postData])

    return { success, setRow }
}

export default usePost