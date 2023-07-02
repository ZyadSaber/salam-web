import React, { memo, useCallback } from "react";
import { useTableControlsButtons } from "@commons/table";
import { ModalViewProp } from "@commons/global";
import RadioBox from "@commons/radio-box"
import { InputText, TextArea } from "@commons/input-text";
import InputNumber from "@commons/input-number"
import { SelectWithApi } from "@commons/select";
import { useFormManager } from "@commons/hooks";
import { Button } from "@commons/button"
import { voucherOptions } from "../constant"

const ModalView = ({
    onClose,
    selectedRow,
    refreshTable
}: ModalViewProp) => {
    const { state, onChange } = useFormManager({
        initialValues: {
            ...selectedRow
        }
    })
    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA", runFetch: refreshTable })

    const handleSave = useCallback(() => {
        onSaveAndInsertion(state)
        onClose()
    }, [onSaveAndInsertion, state, onClose])

    return (
        <>
            <>
                <InputText
                    name="voucher_date"
                    type="date"
                    onChange={onChange}
                    value={state?.voucher_date}
                    Label="dt"
                    width="47%"
                />
                <InputNumber
                    name="voucher_amount"
                    onChange={onChange}
                    value={state?.voucher_amount}
                    Label="amnt"
                    width="47%"
                />
                <RadioBox
                    name="voucher_type"
                    onChange={onChange}
                    value={state?.voucher_type}
                    Label="vchr"
                    width="47%"
                    options={voucherOptions}
                    hidden={state.query_status === "u"}
                />
                <SelectWithApi
                    name="voucher_id"
                    Api="QUERY_CUSTOMER_AND_SUPPLIER_LIST"
                    Label="nm"
                    params={{
                        invoice_type: state.voucher_type
                    }}
                    value={state?.voucher_id}
                    fetchOnFirstRun
                    width="47%"
                    onChange={onChange}
                />
                <TextArea
                    width="100%"
                    name="notes"
                    onChange={onChange}
                    value={state?.notes}
                    Label="nts"
                />
                <Button
                    onClick={handleSave}
                    label="sv"
                />
            </>
        </>
    )
}

export default memo(ModalView)