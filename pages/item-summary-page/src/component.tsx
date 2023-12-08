import React, { memo, useCallback } from "react";
import Flex from "@commons/flex";
import { SelectWithApi } from "@commons/select";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import { useFormManager } from "@commons/hooks";
import DatePicker from "@commons/date-picker";
import { SearchAndClearButton } from "@commons/button";
import { columns } from "./constant";
const ItemSummaryPage = () => {
    const { state, onChange } = useFormManager({ initialValues: { date_from: "", date_to: "", item_id: "" } })
    const {
        tableRef,
         fetchTableData,
        } = useCreateTableActionRef()
    const handleSearch = useCallback(() => {
        fetchTableData(
            {
                item_id: state.item_id,
                        date_from: state.date_from,
                        date_to: state.date_to
            }
        )
    }, [fetchTableData, state.date_from, state.date_to, state.item_id])
    return (
        <>
                <Flex bordered width="100%" wrap gap="5px" align="center">
                    <SelectWithApi
                        label="itm"
                        fetchOnFirstRun
                        name="item_id"
                        value={state.item_id}
                        onChange={onChange}
                        api="QUERY_ITEMS_LIST"
                    />
                    <DatePicker
                        name="date_from"
                        value={state.date_from}
                        label="frm"
                        onChange={onChange}
                    />
                    <DatePicker
                        name="date_to"
                        value={state.date_to}
                        label="to"
                        onChange={onChange}
                    />
                    <SearchAndClearButton
                        onSearch={handleSearch}
                        noClear
                    />
                </Flex>
                <TableWithApi
                    ref={tableRef}
                    api={"QUERY_ITEM_SUMMARY_TABLE"}
                    columns={columns}
                    hideTools={false}
                    canExcel
                    rowKey={"rowKey"}
                />
        </>
    )
}

export default memo(ItemSummaryPage)