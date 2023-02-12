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
    //@ts-ignore
    const { print_option, note } = state

    return (
        <Modal
            visible={visible}
            label={"Details"}
            onOK={onOK}
            onClose={onClose}
        >
            <InputText
                name='print_option'
                onChange={onChange}
                value={print_option}
                Label="Print Option"
            />
            <InputText
                name='note'
                onChange={onChange}
                value={note}
                Label="Notes"
            />
        </Modal>
    )
};

export default memo(ModalView)