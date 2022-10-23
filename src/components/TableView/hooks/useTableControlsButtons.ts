import { useState, useCallback } from "react";
import { isConstructorDeclaration } from "typescript";
import usePost from "../../../hooks/usePost";

type modeType = "n" | "d" | "u" | ""

const useTableControlsButtons = (api: string) => {

    const [selectedRow, setSelectedRow] = useState<{id?:number}>({})
    const [mode, setMode] = useState<modeType>("")
    const [response, setResponse] = useState(false)

    const {  setRow: rowToAdd } = usePost(api)
    // const {  setRow: rowToEdit, setId: idToEdit } = usePut(api)
    // const { setRow: rowToDelete, setId: idToDelete } = useDelete(api)
    const [modal, setModal] = useState(false)


    const onSaveAndInsertion = useCallback(()=>{
        if (mode === "n") {
            rowToAdd(selectedRow)
            setSelectedRow({})
            setMode("")
            setModal(false)
        } else if (mode === "u") {
            const rowToEdit = (rowToEdit: any)=>{}
            const idToEdit = (idToEdit: any)=>{}
            rowToEdit(selectedRow)
            idToEdit(selectedRow.id)
            setSelectedRow({})
            setMode("")
            setModal(false)
        }else if (mode === "d") {

        }
    },[mode, rowToAdd, selectedRow])

    // console.log(selectedRow)

    // const onDelete = useCallback(()=>{
    //      rowToDelete(selectedRow)
    //     idToDelete(selectedRow.id)
    // },[idToDelete, rowToDelete, selectedRow])

    return{setSelectedRow, onSaveAndInsertion, setMode, selectedRow, setModal, modal}

}

export default useTableControlsButtons