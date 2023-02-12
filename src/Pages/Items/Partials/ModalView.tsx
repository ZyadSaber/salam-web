import React, { memo } from 'react';
import Modal from "../../../components/Modal/Modal";
import InputText from '../../../components/InputText/InputText';
import useFormManager from '../../../hooks/useFormManager';
import { ModalViewProp } from "../../../Types/general"

const ModalView = ({
    visible,
    onOK,
    onClose,
    setSelectedRow,
    selectedRow
}: ModalViewProp) => {

    const { state, onChange } = useFormManager({ initialValue: selectedRow, setSelectedRow: setSelectedRow })
    //@ts-ignore
    const { item_name, unit, base_price } = state

    return (
        <Modal
            visible={visible}
            label={"Details"}
            onOK={onOK}
            onClose={onClose}
        >
            <InputText
                name="item_name"
                Label='Name'
                onChange={onChange}
                value={item_name}
            />
            <InputText
                name="unit"
                Label='Unit'
                onChange={onChange}
                value={unit}
            />
            <InputText
                name="base_price"
                Label='Base Price'
                onChange={onChange}
                value={base_price}
            />
        </Modal>
    )
};

export default memo(ModalView)