import React, { memo } from "react";
import RadioBox from "@commons/radio-box";
import { useFormManager } from "@commons/hooks";
import Flex from "@commons/flex";
import { TableWithApi } from "@commons/table";
import { voucherOptions, columns } from "./constant"

const AccountsSummary = () => {
    const { state, onChange } = useFormManager({ initialValues: { account_type: "C" } })
    return (
        <>
            <Flex bordered width="100%" wrap>
                <RadioBox
                    name="account_type"
                    onChange={onChange}
                    value={state?.account_type}
                    Label="account_type"
                    width="47%"
                    options={voucherOptions}
                />
            </Flex>
            <TableWithApi
                api={"QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA"}
                columns={columns}
                hideTools={false}
                canExcel={true}
                rowKey={"rowKey"}
                params={{
                    account_type: state.account_type,
                }}
                fetchOnFirstRun
            />
        </>
    )
}

export default memo(AccountsSummary)