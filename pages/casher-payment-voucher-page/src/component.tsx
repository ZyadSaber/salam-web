import React, { memo } from "react";
import Flex from "@commons/flex";
import InputText from "@commons/input-text/src/inputText";
import { TableWithApi } from "@commons/table";
import { columns } from "./constant";
import { useFormManager } from "@commons/hooks";
import ModalView from "./Partials/modalView"

const CasherPaymentVoucher = () => {
    const { state, onChange } = useFormManager({ initialValues: { date_from: "", date_to: "" } })
    return (
        <>
            <Flex width="100%" flexDirection="column">
                <Flex width="100%" >
                    <InputText name="date_from" type="date" Label="from" onChange={onChange} />
                    <InputText name="date_to" type="date" Label="to" onChange={onChange} />
                </Flex>
                <TableWithApi
                    api={"QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA"}
                    postApi={"POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA"}
                    columns={columns}
                    hideTools={false}
                    canEdit={true}
                    canAdd={true}
                    canDelete={true}
                    rowKey={"payment_voucher_id"}
                    params={{
                        date_from: state.date_from,
                        date_to: state.date_to
                    }}
                    ModalContent={ModalView}
                    fetchOnFirstRun
                />
            </Flex>
        </>
    )
}

export default memo(CasherPaymentVoucher)