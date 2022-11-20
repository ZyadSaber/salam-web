import React, { memo, useCallback } from 'react';
import Modal from "../../../components/Modal/Modal";

interface ModalViewProp {
    visible?: boolean;
    onOK?: () => void;
    onClose?: () => void;
    selectedRow?: any;
    setSelectedRow?: any
}

const ModalView = ({
    visible: visible,
    onOK,
    onClose,
    setSelectedRow,
    selectedRow
}: ModalViewProp) => {

    const onChangeName = useCallback((event?: any) => {
        setSelectedRow({ ...selectedRow, name: event.target.value })
    }, [selectedRow, setSelectedRow]);
    const onChangeEmail = useCallback((event?: any) => {
        setSelectedRow({ ...selectedRow, email: event.target.value })
    }, [selectedRow, setSelectedRow])
    const onChangePhone = useCallback((event?: any) => {
        setSelectedRow({ ...selectedRow, phone: event.target.value })
    }, [selectedRow, setSelectedRow])
    const onChangeMobile = useCallback((event?: any) => {
        setSelectedRow({ ...selectedRow, mobile: event.target.value })
    }, [selectedRow, setSelectedRow])
    const onChangeAddress = useCallback((event?: any) => {
        setSelectedRow({ ...selectedRow, address: event.target.value })
    }, [selectedRow, setSelectedRow])



    return (
        <Modal
            visible={visible}
            label={"Details"}
            onOK={onOK}
            onClose={onClose}
        >
            <label htmlFor="">Name</label>
            <input type="text" value={selectedRow.name} onChange={onChangeName} />
            <label htmlFor="">Email</label>
            <input type="text" value={selectedRow.email} onChange={onChangeEmail} />
            <label htmlFor="">Phone</label>
            <input type="text" value={selectedRow.phone} onChange={onChangePhone} />
            <label htmlFor="">Mobile</label>
            <input type="text" value={selectedRow.mobile} onChange={onChangeMobile} />
            <label htmlFor="">Address</label>
            <input type="text" value={selectedRow.address} onChange={onChangeAddress} />
        </Modal>
    )
};

export default memo(ModalView)