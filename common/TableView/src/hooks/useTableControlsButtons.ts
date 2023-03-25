import { useState, useCallback } from "react";
import {  usePost } from "@commons/hooks";

const useTableControlsButtons = ({api = ""}) => {

    const [selectedRow, setRows] = useState<any>({})
    const { setRow } = usePost({link: api})

    const onSaveAndInsertion = ()=>{
        //@ts-ignore
       if(selectedRow.query_status !== undefined){
        setRow(selectedRow)
       }
    }

    const setSelectedRow = useCallback((v:any)=>{
        setRows(v)
    },[])
    return{setSelectedRow, onSaveAndInsertion, selectedRow}

}

export default useTableControlsButtons