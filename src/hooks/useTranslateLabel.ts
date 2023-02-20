import { useEffect, useState } from "react";
import useFetch from "./useFetch";

interface useTranslateLabelProps{
    label: string;
}

const useTranslateLabel = ({label}: useTranslateLabelProps)=>{
    const [transLabel, setTransLabel] = useState("")

const { data}  = useFetch({
    link: "QUERY_LABELS",
    params:{
        label: label,
        p_language: 2
    },
    fetchOnFirstRun: true
})

useEffect(()=>{
    if(data){
        setTransLabel(data.label)
    }
},[label])

// const tran_label  = 

return {tran_label: transLabel}

}

export default useTranslateLabel