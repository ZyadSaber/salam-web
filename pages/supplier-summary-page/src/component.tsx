import React, { memo, useCallback } from "react";
import Flex from "@commons/flex";
import InputText from "@commons/input-text/src/inputText";
import { SelectWithApi } from "@commons/select";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import { useFormManager } from "@commons/hooks";
import { Button } from "@commons/button"
import { columns } from "./constant";

const SupplierSummaryPage = () => {
    const { state, onChange } = useFormManager({ initialValues: { date_from: "", date_to: "", supplier_id: "" } })
    const {
        tableRef,
         fetchTableData,
        } = useCreateTableActionRef()

    const handleSearch = useCallback(() => {
        fetchTableData(
            {
                supplier_id: state.supplier_id,
                // date_from: state.date_from,
                // date_to: state.date_to
            }
        )
    }, [fetchTableData, state.supplier_id])
    return (
        <>
            <Flex width="100%" flexDirection="column">
                <Flex width="100%" >
                    <SelectWithApi
                        label="splr"
                        fetchOnFirstRun
                        name="supplier_id"
                        value={state.supplier_id}
                        onChange={onChange}
                        Api="QUERY_SUPPLIER_LIST"
                    />
                    <InputText
                        name="date_from"
                        type="date"
                        label="frm"
                        onChange={onChange}
                    />
                    <InputText
                        name="date_to"
                        type="date"
                        label="to"
                        onChange={onChange}
                    />
                        <Button
                        onClick={handleSearch}
                        label="search"
                        width="10%"
                    />
                </Flex>
                <TableWithApi
                    ref={tableRef}
                    api={"QUERY_SUPPLIER_SUMMARY_TABLE"}
                    columns={columns}
                    hideTools={false}
                    canExcel
                    rowKey={"rowKey"}
                />
            </Flex>
        </>
    )
}

export default memo(SupplierSummaryPage)