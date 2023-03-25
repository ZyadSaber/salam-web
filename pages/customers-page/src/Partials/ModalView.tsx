import React, { memo } from 'react';
import Modal from "@commons/modal";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";

const ModalView = ({
    visible,
    onOK,
    onClose,
    setSelectedRow,
    selectedRow
}: any) => {

    const { state, onChange } = useFormManager({ initialValue: selectedRow, setSelectedRow: setSelectedRow })
    //@ts-ignore
    const { name, email, phone, mobile, address } = state

    return (
        <Modal
            visible={visible}
            label={"Details"}
            onOK={onOK}
            onClose={onClose}
        >
            <InputText
                name="name"
                Label='Name'
                onChange={onChange}
                value={name}
            />
            <InputText
                name="email"
                Label='Email'
                onChange={onChange}
                value={email}
            />
            <InputText
                name="phone"
                Label='Phone'
                onChange={onChange}
                value={phone}
            />
            <InputText
                name="mobile"
                Label='Mobile'
                onChange={onChange}
                value={mobile}
            />
            <InputText
                name="address"
                Label='Address'
                onChange={onChange}
                value={address}
            />
        </Modal>
    )
};

export default memo(ModalView)