import React, { memo } from "react";
import Flex from "@commons/flex";
import InputText from "@commons/input-text/src/inputText";
import { TableWithApi } from "@commons/table";
import { columns } from "./constant";
import { useFormManager } from "@commons/hooks";
import { defaultDate } from "@commons/global"


const DailyTotalPage = () => {
    const { state, onChange } = useFormManager({ initialValues: { date_from: defaultDate, date_to: defaultDate } })
    return (
        <>
            <Flex width="100%" flexDirection="column">
                <Flex width="100%" >
                    <InputText
                        name="date_from"
                        type="date"
                        Label="frm"
                        value={state.date_from}
                        onChange={onChange}
                    />
                    <InputText
                        name="date_to"
                        value={state.date_to}
                        type="date"
                        Label="to"
                        onChange={onChange}
                    />
                </Flex>
                <TableWithApi
                    api={"QUERY_DAILY_SUMMARY_TABLE"}
                    columns={columns}
                    rowKey={"rowKey"}
                    hideTools={false}
                    canExcel
                    params={{
                        date_from: state.date_from,
                        date_to: state.date_to
                    }}
                    fetchOnFirstRun
                />
            </Flex>
        </>
    )
}

export default memo(DailyTotalPage)