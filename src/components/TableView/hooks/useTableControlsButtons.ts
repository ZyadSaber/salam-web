import { useState, useCallback } from "react";
import usePost from "../../../hooks/usePost";

type modeType = "n" | "d" | "u" | ""

const useTableControlsButtons = (api?: string) => {

    const [selectedRow, setSelectedRow] = useState<any>({})
    const [mode, setMode] = useState<modeType>("")
    const { setRow } = usePost(api)
    console.log(mode)


    const onSaveAndInsertion = useCallback(()=>{
        if (mode === "n") {
            setSelectedRow({...selectedRow, "query_status":"n"})
            setRow(selectedRow)
            setSelectedRow({})
            setMode("")
        } else if (mode === "u") {
            setSelectedRow({...selectedRow, "query_status":"u"})
            setSelectedRow({})
            setMode("")
        }
    },[mode, selectedRow, setRow])

    const onDelete = useCallback(() =>{
        setSelectedRow({...selectedRow, "query_status":"d"})
        setRow(selectedRow)
            setSelectedRow({})
            setMode("")
        },[selectedRow, setRow])

    return{setSelectedRow, onSaveAndInsertion, setMode, selectedRow, onDelete}

}

export default useTableControlsButtons