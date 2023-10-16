import React, { memo, useCallback } from "react";
import Flex from "@commons/flex";
import InputText from "@commons/input-text/src/inputText";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import { useFormManager } from "@commons/hooks";
import { defaultDate } from "@commons/global";
import { Button } from "@commons/button";
import { columns } from "./constant";

const DailyTotalPage = () => {
    const { state, onChange } = useFormManager({ initialValues: { date_from: defaultDate, date_to: defaultDate } })

    const {
        tableRef,
         fetchTableData,
        } = useCreateTableActionRef()

    const handleSearch = useCallback(() => {
        fetchTableData(
            {
                date_from: state.date_from,
                date_to: state.date_to
            }
        )
    }, [fetchTableData, state.date_from, state.date_to])

    return (
        <>
            <Flex width="100%" flexDirection="column">
                <Flex width="100%" >
                    <InputText
                        name="date_from"
                        type="date"
                        label="frm"
                        value={state.date_from}
                        onChange={onChange}
                    />
                    <InputText
                        name="date_to"
                        value={state.date_to}
                        type="date"
                        label="to"
                        onChange={onChange}
                    />
                    <Button
                        onClick={handleSearch}
                        label="srch"
                        width="10%"
                    />
                </Flex>
                <TableWithApi
                    ref={tableRef}
                    api={"QUERY_DAILY_SUMMARY_TABLE"}
                    columns={columns}
                    rowKey={"rowKey"}
                    hideTools={false}
                    canExcel
                />
            </Flex>
        </>
    )
}

export default memo(DailyTotalPage)