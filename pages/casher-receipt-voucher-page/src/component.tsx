import React, { memo } from "react";
import Flex from "@commons/flex";
import InputText from "@commons/input-text/src/inputText";
import { ApiTable } from "@commons/table";
import { columns } from "./constant";
import { useFormManager } from "@commons/hooks";
import ModalView from "./Partials/modalView"

const CasherReceiptVoucher = () => {

    const { state, onChange } = useFormManager({ initialValue: { date_from: "", date_to: "" } })

    return (
        <>
            <Flex width="100%" flexDirection="column">
                <Flex width="100%" >
                    <InputText name="date_from" type="date" Label="from" onChange={onChange} />
                    <InputText name="date_to" type="date" Label="to" onChange={onChange} />
                </Flex>
                <ApiTable
                    api={"QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA"}
                    postApi={"POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA"}
                    columns={columns}
                    hideTools={false}
                    canEdit={true}
                    canAdd={true}
                    canDelete={true}
                    rowKey={"receipt_voucher_id"}
                    params={{
                        date_from: state.date_from,
                        date_to: state.date_to
                    }}
                    Modal={ModalView}
                    fetchOnFirstRun
                />
            </Flex>
        </>
    )
}

export default memo(CasherReceiptVoucher)