import React, { memo } from "react";
import Modal from "@commons/modal";
import { ModalViewProp } from "@commons/global";
import { InputText } from "@commons/input-text";
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
    const { state, onChange } = useFormManager({ initialValue: selectedRow, setSelectedRow: setSelectedRow })
    const { date, number, voucher_name } = state
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
                    width="33%"
                />
                <InputText
                    name="amount"
                    type="number"
                    onChange={onChange}
                    value={number}
                    Label="amnt"
                    width="33%"
                />
                <Select
                    name="voucher_name"
                    onChange={onChange}
                    value={voucher_name}
                    Label="vchr"
                    width="33%"
                    Options={voucherOptions}
                />
            </Modal>
        </>
    )
}

export default memo(ModalView)