import React, { memo } from "react";
import Flex from "@commons/flex";
import InputText from "@commons/input-text/src/inputText";
import { ApiTable } from "@commons/table";
import { columns } from "./constant";
import { useFormManager } from "@commons/hooks";

const CasherReceiptVoucher = () => {

    const { state, onChange } = useFormManager({ initialValue: { date_from: "", date_to: "" } })

    return (
        <>
            <Flex width="100%" flexDirection="column">
                <Flex width="100%" >
                    <InputText name="date" type="date" Label="from" onChange={onChange} />
                    <InputText name="date" type="date" Label="to" onChange={onChange} />
                </Flex>
                <ApiTable
                    api={"QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA"}
                    postApi={""}
                    columns={columns}
                    hideTools={true}
                    canEdit={true}
                    canAdd={true}
                    canDelete={true}
                    rowKey={"customer_id"}
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

export default memo(CasherReceiptVoucher)