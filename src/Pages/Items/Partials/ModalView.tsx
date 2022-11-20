import React, { memo, useCallback } from 'react';
import Modal from "../../../components/Modal/Modal";

interface ModalViewProp {
    visible: boolean;
    onOK: () => void;
    onClose: () => void;
    Items: any;
    setItems: any
}

const ModalView = ({
    visible,
    onOK,
    onClose,
    setItems,
    Items
}: ModalViewProp) => {

    const onChangeName = useCallback((event?: any) => {
        setItems({ ...Items, item_name: event.target.value })
    }, [Items, setItems]);
    const onChangeEmail = useCallback((event?: any) => {
        setItems({ ...Items, unit: event.target.value })
    }, [Items, setItems])
    const onChangePhone = useCallback((event?: any) => {
        setItems({ ...Items, base_price: event.target.value })
    }, [Items, setItems])



    return (
        <Modal
            visible={visible}
            label={"Details"}
            onOK={onOK}
            onClose={onClose}
        >
            <label htmlFor="">Item Name</label>
            <input type="text" value={Items.item_name} onChange={onChangeName} />
            <label htmlFor="">Unit</label>
            <input type="text" value={Items.unit} onChange={onChangeEmail} />
            <label htmlFor="">Base Price</label>
            <input type="text" value={Items.base_price} onChange={onChangePhone} />
        </Modal>
    )
};

export default memo(ModalView)