import { useCallback } from "react";
import useFetch from "./useFetch";

const useTranslation = ()=>{

const { data}  = useFetch({
    link: "QUERY_LABELS",
    params: {
            p_language: "ar",
        },
        // noAuthorization: false,
    fetchOnFirstRun: true
})

const tran  = useCallback((label: string)=>{
    // if(data[label]){
    //     return(data[label])
    // }else{
    //     return (label)
    // }
},[])

return {tran}

}

export default useTranslation