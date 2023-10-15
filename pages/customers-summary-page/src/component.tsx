import React, { memo, useCallback } from "react";
import Flex from "@commons/flex";
import InputText from "@commons/input-text/src/inputText";
import { SelectWithApi } from "@commons/select";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import { useFormManager } from "@commons/hooks";
import { Button } from "@commons/button";
import { columns } from "./constant";

const CustomersSummaryPage = () => {
    const { state, onChange } = useFormManager({ initialValues: { date_from: "", date_to: "", customer_id: "" } })
    const {
        tableRef,
         fetchTableData,
        } = useCreateTableActionRef()

    const handleSearch = useCallback(() => {
        fetchTableData(
            {
                customer_id: state.customer_id,
                // date_from: state.date_from,
                // date_to: state.date_to
            }
        )
    }, [fetchTableData, state.customer_id])
    return (
        <>
            <Flex width="100%" flexDirection="column">
                <Flex width="100%" >
                    <SelectWithApi
                        label="cstmr"
                        fetchOnFirstRun
                        name="customer_id"
                        value={state.customer_id}
                        onChange={onChange}
                        Api="QUERY_CUSTOMERS_LIST"
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
                    api={"QUERY_CUSTOMER_SUMMARY_TABLE"}
                    columns={columns}
                    rowKey={"rowKey"}
                    hideTools={false}
                    canExcel
                />
            </Flex>
        </>
    )
}

export default memo(CustomersSummaryPage)