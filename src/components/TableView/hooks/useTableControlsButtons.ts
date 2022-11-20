import { useState, useCallback, useEffect } from "react";
import usePost from "../../../hooks/usePost";

const useTableControlsButtons = (api?: string) => {

    const [selectedRow, setSelectedRow] = useState<any>({})
    const { setRow } = usePost(api)

    const onSaveAndInsertion = ()=>{
        //@ts-ignore
       if(selectedRow.query_status !== undefined){
        setRow(selectedRow)
       }
    }
    return{setSelectedRow, onSaveAndInsertion, selectedRow}

}

export default useTableControlsButtons