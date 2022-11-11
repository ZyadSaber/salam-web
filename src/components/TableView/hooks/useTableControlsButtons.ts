import { useState, useCallback } from "react";
import usePost from "../../../hooks/usePost";

const useTableControlsButtons = (api?: string) => {

    const [selectedRow, setSelectedRow] = useState<any>({})
    const { setRow } = usePost(api)

    const onSaveAndInsertion = useCallback(()=>{
        if (selectedRow?.query_status === "n") {
            setRow(selectedRow)
            setSelectedRow({})
        } else if (selectedRow?.query_status === "u") {
            setRow(selectedRow)
            setSelectedRow({})
        } else if (selectedRow?.query_status === "d") {
            setRow(selectedRow)
            setSelectedRow({})
        } 
    },[selectedRow, setRow])

    return{setSelectedRow, onSaveAndInsertion, selectedRow}

}

export default useTableControlsButtons