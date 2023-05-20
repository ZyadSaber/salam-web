import { useState, useCallback } from "react";
import { useLocalStorage } from "@commons/hooks";
import {API_ID} from "@commons/global";
import { useToast } from '@chakra-ui/react';

interface usePostProps{
    link: string;
    noAuthorization?: boolean;
    additionalFunctionToRun?: ()=>void;
    runOnSuccess?: ()=>void;
    runOnFail?: ()=>void;
};
interface successType{
    response: string;
}

const usePost = ({
    link  = "",
    noAuthorization = false,
    additionalFunctionToRun,
    runOnSuccess,
    runOnFail
}: usePostProps) => {
    const toast = useToast()
    //@ts-ignore
    const url = `http://144.24.209.19:9090/api/v1/${API_ID[link]}`
    const [success, setSuccess] = useState<successType>()
    const { authorization } = useLocalStorage()
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
        if(runOnSuccess)runOnSuccess()
            } else {
                toast({
            position: "top-right",
            title: 'Error',
            description: `${data.response}`,
            status: 'error',
            duration: 9000,
            isClosable: true,
        })
        if(runOnFail)runOnFail()
            }
            setSuccess(data)
            if(additionalFunctionToRun){
                additionalFunctionToRun()
            }
            return data
        } catch (e) {
        }}
    }, [additionalFunctionToRun, authorization, noAuthorization, runOnFail, runOnSuccess, toast, url])

    const setRow = useCallback((row: any) => {
        postData(row)
    }, [postData])

    return { success, setRow }
}

export default usePost