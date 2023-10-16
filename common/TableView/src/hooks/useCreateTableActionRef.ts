import { useRef, useCallback } from "react";

const useCreateTableActionRef = ()=>{

    const tableRef = useRef()

    const fetchTableData = useCallback(async (params?: any) =>
    //@ts-ignore
    await tableRef.current?.runFetch(params),
  [tableRef])

    return {
        tableRef,
        fetchTableData
    }
}

export default useCreateTableActionRef