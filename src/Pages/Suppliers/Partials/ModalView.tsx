import { memo } from 'react';
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
                width="47%"
            />
            <InputText
                name="email"
                Label='Email'
                onChange={onChange}
                value={email}
                width="47%"
            />
            <InputText
                name="phone"
                Label='Phone'
                onChange={onChange}
                value={phone}
                width="47%"
            />
            <InputText
                name="mobile"
                Label='Mobile'
                onChange={onChange}
                value={mobile}
                width="47%"
            />
            <InputText
                name="address"
                Label='Address'
                onChange={onChange}
                value={address}
                width="100%"
            />
        </Modal>
    )
};

export default memo(ModalView)