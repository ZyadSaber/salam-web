import { useEffect } from "react";
import useFetch from "./useFetch";

interface useTranslateLabelProps{
    label?: string;
    chunkLabel?: string[];
    noAuthorization?: boolean;
}

const useTranslateLabel = ({label = "", chunkLabel, noAuthorization = false}: useTranslateLabelProps)=>{

const { data, runFetch}  = useFetch({
    link: "QUERY_LABELS",
    params: {
            label: label,
            p_language: 2,
            chunk_labels: chunkLabel
        },
        noAuthorization: noAuthorization
})         


useEffect(()=>{
    if(label !== ""){
        runFetch()
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[label])

return {tran_label: data.label}

}

export default useTranslateLabel