import React, { memo, useCallback } from "react";
import Flex from "@commons/flex";
import { InputText } from "@commons/input-text";
import { SelectWithApi } from "@commons/select";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import { useFormManager } from "@commons/hooks";
import { Button } from "@commons/button";
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
            <Flex width="100%" flexDirection="column">
                <Flex width="100%" >
                    <SelectWithApi
                        label="itm"
                        fetchOnFirstRun
                        name="item_id"
                        value={state.item_id}
                        onChange={onChange}
                        api="QUERY_ITEMS_LIST"
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
                    api={"QUERY_ITEM_SUMMARY_TABLE"}
                    columns={columns}
                    hideTools={false}
                    canExcel
                    rowKey={"rowKey"}
                />
            </Flex>
        </>
    )
}

export default memo(ItemSummaryPage)