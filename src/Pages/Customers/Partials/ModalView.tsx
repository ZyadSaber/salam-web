import { memo, useCallback } from 'react';
import Modal from "../../../components/Modal/Modal";

interface ModalViewProp {
    visable: boolean;
    onOK: () => void;
    onClose: () => void;
    customer: any;
    setCustomer: any
}

const ModalView = ({
    visable,
    onOK,
    onClose,
    setCustomer,
    customer
}: ModalViewProp) => {

    const onChangeName = useCallback((event?: any) => {
        setCustomer({ ...customer, name: event.target.value })
    }, [customer, setCustomer]);
    const onChangeEmail = useCallback((event?: any) => {
        setCustomer({ ...customer, email: event.target.value })
    }, [customer, setCustomer])
    const onChangePhone = useCallback((event?: any) => {
        setCustomer({ ...customer, phone: event.target.value })
    }, [customer, setCustomer])
    const onChangeMobile = useCallback((event?: any) => {
        setCustomer({ ...customer, mobile: event.target.value })
    }, [customer, setCustomer])
    const onChangeAddress = useCallback((event?: any) => {
        setCustomer({ ...customer, address: event.target.value })
    }, [customer, setCustomer])



    return (
        <Modal
            visable={visable}
            label={"Details"}
            onOK={onOK}
            onClose={onClose}
        >
            <label htmlFor="">Name</label>
            <input type="text" value={customer.name} onChange={onChangeName} />
            <label htmlFor="">Email</label>
            <input type="text" value={customer.email} onChange={onChangeEmail} />
            <label htmlFor="">Phone</label>
            <input type="text" value={customer.phone} onChange={onChangePhone} />
            <label htmlFor="">Mobile</label>
            <input type="text" value={customer.mobile} onChange={onChangeMobile} />
            <label htmlFor="">Address</label>
            <input type="text" value={customer.address} onChange={onChangeAddress} />
        </Modal>
    )
};

export default memo(ModalView)