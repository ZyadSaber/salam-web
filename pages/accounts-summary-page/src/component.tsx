import React, { memo, useCallback } from "react";
import RadioBox from "@commons/radio-box";
import { useFormManager } from "@commons/hooks";
import Flex from "@commons/flex";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import { SearchAndClearButton } from "@commons/button"
import { voucherOptions, columns } from "./constant"

const AccountsSummary = () => {
    const { state, onChange } = useFormManager({ initialValues: { type: "C" } })
    const {
        tableRef,
        fetchTableData,
    } = useCreateTableActionRef()
    const handleSearch = useCallback(() => {
        fetchTableData(
            {
                type: state.type,
            }
        )
    }, [fetchTableData, state.type])
    return (
        <>
            <Flex bordered width="100%" wrap gap="5px" align="center">
                <RadioBox
                    name="type"
                    onChange={onChange}
                    value={state?.type}
                    label="type"
                    options={voucherOptions}
                    width="auto"
                />
                <SearchAndClearButton
                    onSearch={handleSearch}
                    noClear
                />
            </Flex>
            <TableWithApi
                ref={tableRef}
                api={"QUERY_ACCOUNTS_SUMMARY_TABLE"}
                columns={columns}
                hideTools={false}
                canExcel={true}
                rowKey={"rowKey"}
            />
        </>
    )
}

export default memo(AccountsSummary)