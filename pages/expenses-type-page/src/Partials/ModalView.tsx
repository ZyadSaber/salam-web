import React, { memo } from 'react';
import Modal from "@commons/modal";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
import { ModalViewProp } from "@commons/global"

const ModalView = ({
    visible,
    onOK,
    onClose,
    setSelectedRow,
    selectedRow
}: ModalViewProp) => {

    const { state, onChange } = useFormManager({ initialValue: selectedRow, setSelectedRow: setSelectedRow })
    //@ts-ignore
    const { expense_name, notes } = state

    return (
        <Modal
            visible={visible}
            label={"Details"}
            onOK={onOK}
            onClose={onClose}
        >
            <InputText
                name="expense_name"
                Label='expnsnm'
                width="100%"
                onChange={onChange}
                value={expense_name}
            />
            <InputText
                name="notes"
                Label='nts'
                width="100%"
                onChange={onChange}
                value={notes}
            />
        </Modal>
    )
};

export default memo(ModalView)