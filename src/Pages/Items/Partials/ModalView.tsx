import { memo, useCallback } from 'react';
import Modal from "../../../components/Modal/Modal";

interface ModalViewProp {
    visable: boolean;
    onOK: () => void;
    onClose: () => void;
    Items: any;
    setItems: any
}

const ModalView = ({
    visable,
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
            visable={visable}
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