import React, { memo, useCallback } from "react";
import Flex from "@commons/flex";
import { SelectWithApi } from "@commons/select";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import { useFormManager } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import DatePicker from "@commons/date-picker";
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
                        api="QUERY_CUSTOMERS_LIST"
                    />
                    <DatePicker
                        name="date_from"
                        label="frm"
                        value={state.date_from}
                        onChange={onChange}
                    />
                    <DatePicker
                        name="date_to"
                        label="to"
                        value={state.date_to}
                        onChange={onChange}
                    />
                    <SearchAndClearButton
                        onSearch={handleSearch}
                        width="20%"
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