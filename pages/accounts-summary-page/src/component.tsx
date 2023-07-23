import React, { memo } from "react";
import RadioBox from "@commons/radio-box";
import { useFormManager } from "@commons/hooks";
import Flex from "@commons/flex";
import { TableWithApi } from "@commons/table";
import { voucherOptions, columns } from "./constant"

const AccountsSummary = () => {
    const { state, onChange } = useFormManager({ initialValues: { type: "C" } })
    return (
        <>
            <Flex bordered width="100%" wrap>
                <RadioBox
                    name="type"
                    onChange={onChange}
                    value={state?.type}
                    Label="type"
                    width="47%"
                    options={voucherOptions}
                />
            </Flex>
            <TableWithApi
                api={"QUERY_ACCOUNTS_SUMMARY_TABLE"}
                columns={columns}
                hideTools={false}
                canExcel={true}
                rowKey={"rowKey"}
                params={{
                    type: state.type,
                }}
                fetchOnFirstRun
            />
        </>
    )
}

export default memo(AccountsSummary)