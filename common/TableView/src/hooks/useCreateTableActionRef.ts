import { useRef, useCallback } from "react";

const useCreateTableActionRef = ()=>{

    const tableRef = useRef()

    const fetchTableData = useCallback(async (params?: any) =>
    //@ts-ignore
    await tableRef.current?.runFetch(params),
  [tableRef])

  const getTableData = useCallback(
    //@ts-ignore
    () => tableRef.current?.getCurrentDataSource() || [],
    [tableRef]
  );

  const setTableData = useCallback(
    //@ts-ignore
    (newTableData: any) => tableRef.current?.setTableData(newTableData) || [],
    [tableRef]
  );

  const resetTable = useCallback(
    //@ts-ignore
    () => tableRef.current?.resetTableData() || [],
    [tableRef]
  );

    return {
        tableRef,
        fetchTableData,
        getTableData,
        setTableData,
        resetTable
    }
}

export default useCreateTableActionRef