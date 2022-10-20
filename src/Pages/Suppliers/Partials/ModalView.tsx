import React, { memo, useCallback } from 'react';
import Modal from "../../../components/Modal/Modal";

interface ModalViewProp {
    visable: boolean;
    onOK: () => void;
    onClose: () => void;
    suppliers: any;
    setSuppliers: any
}

const ModalView = ({
    visable,
    onOK,
    onClose,
    setSuppliers,
    suppliers
}: ModalViewProp) => {

    const onChangeName = useCallback((event?: any) => {
        setSuppliers({ ...suppliers, name: event.target.value })
    }, [suppliers, setSuppliers]);
    const onChangeEmail = useCallback((event?: any) => {
        setSuppliers({ ...suppliers, email: event.target.value })
    }, [suppliers, setSuppliers])
    const onChangePhone = useCallback((event?: any) => {
        setSuppliers({ ...suppliers, phone: event.target.value })
    }, [suppliers, setSuppliers])
    const onChangeMobile = useCallback((event?: any) => {
        setSuppliers({ ...suppliers, mobile: event.target.value })
    }, [suppliers, setSuppliers])
    const onChangeAddress = useCallback((event?: any) => {
        setSuppliers({ ...suppliers, address: event.target.value })
    }, [suppliers, setSuppliers])



    return (
        <Modal
            visable={visable}
            label={"Details"}
            onOK={onOK}
            onClose={onClose}
        >
            <label htmlFor="">Name</label>
            <input type="text" value={suppliers.name} onChange={onChangeName} />
            <label htmlFor="">Email</label>
            <input type="text" value={suppliers.email} onChange={onChangeEmail} />
            <label htmlFor="">Phone</label>
            <input type="text" value={suppliers.phone} onChange={onChangePhone} />
            <label htmlFor="">Mobile</label>
            <input type="text" value={suppliers.mobile} onChange={onChangeMobile} />
            <label htmlFor="">Address</label>
            <input type="text" value={suppliers.address} onChange={onChangeAddress} />
        </Modal>
    )
};

export default memo(ModalView)