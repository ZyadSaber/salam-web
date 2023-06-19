import React, { memo } from "react";
import Modal from "@commons/modal";
import { ModalViewProp } from "@commons/global";
import { InputText, TextArea } from "@commons/input-text";
import { SelectWithApi, Select } from "@commons/select";
import { useFormManager } from "@commons/hooks";
import { voucherOptions } from "../constant"

const ModalView = ({
    visible,
    onOK,
    onClose,
    setSelectedRow,
    selectedRow
}: ModalViewProp) => {
    const { state, onChange } = useFormManager({ initialValues: selectedRow, setSelectedRow: setSelectedRow })
    const { date, voucher_type, person_id, amount, notes } = state
    return (
        <>
            <Modal
                visible={visible}
                label={"Details"}
                onOK={onOK}
                onClose={onClose}
            >
                <InputText
                    name="date"
                    type="date"
                    onChange={onChange}
                    value={date}
                    Label="dt"
                    width="47%"
                />
                <InputText
                    name="amount"
                    type="number"
                    onChange={onChange}
                    value={amount}
                    Label="amnt"
                    width="47%"
                />
                <Select
                    name="voucher_type"
                    onChange={onChange}
                    value={voucher_type}
                    Label="vchr"
                    width="47%"
                    Options={voucherOptions}
                />
                <SelectWithApi
                    name="person_id"
                    Api="QUERY_CUSTOMER_AND_SUPPLIER_LIST"
                    Label="nm"
                    params={{
                        invoice_type: voucher_type
                    }}
                    value={person_id}
                    fetchOnFirstRun
                    width="47%"
                    onChange={onChange}
                />
                <TextArea
                    width="100%"
                    name="notes"
                    onChange={onChange}
                    value={notes}
                    Label="nts"
                />
            </Modal>
        </>
    )
}

export default memo(ModalView)