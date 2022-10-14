import { memo, useCallback } from 'react';
import Modal from "../../../components/Modal/Modal";

interface ModalViewProp {
    visable: boolean;
    onOK: () => void;
    onClose: () => void;
    Supplier: any;
    setSupplier: any
}

const ModalView = ({
    visable,
    onOK,
    onClose,
    setSupplier,
    Supplier
}: ModalViewProp) => {

    const onChangeName = useCallback((event?: any) => {
        setSupplier({ ...Supplier, name: event.target.value })
    }, [Supplier, setSupplier]);
    const onChangeEmail = useCallback((event?: any) => {
        setSupplier({ ...Supplier, email: event.target.value })
    }, [Supplier, setSupplier])
    const onChangePhone = useCallback((event?: any) => {
        setSupplier({ ...Supplier, phone: event.target.value })
    }, [Supplier, setSupplier])
    const onChangeMobile = useCallback((event?: any) => {
        setSupplier({ ...Supplier, mobile: event.target.value })
    }, [Supplier, setSupplier])
    const onChangeAddress = useCallback((event?: any) => {
        setSupplier({ ...Supplier, address: event.target.value })
    }, [Supplier, setSupplier])



    return (
        <Modal
            visable={visable}
            label={"Details"}
            onOK={onOK}
            onClose={onClose}
        >
            <label htmlFor="">Name</label>
            <input type="text" value={Supplier.name} onChange={onChangeName} />
            <label htmlFor="">Email</label>
            <input type="text" value={Supplier.email} onChange={onChangeEmail} />
            <label htmlFor="">Phone</label>
            <input type="text" value={Supplier.phone} onChange={onChangePhone} />
            <label htmlFor="">Mobile</label>
            <input type="text" value={Supplier.mobile} onChange={onChangeMobile} />
            <label htmlFor="">Address</label>
            <input type="text" value={Supplier.address} onChange={onChangeAddress} />
        </Modal>
    )
};

export default memo(ModalView)