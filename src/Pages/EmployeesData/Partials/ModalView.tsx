import { memo } from 'react';
import Modal from "../../../components/Modal/Modal";
import { ModalViewProp } from "../../../Types/general";
import useFormManager from '../../../hooks/useFormManager';
import InputText from '../../../components/InputText/InputText';

const ModalView = ({
    visible,
    onOK,
    onClose,
    setSelectedRow,
    selectedRow
}: ModalViewProp) => {


    const { onChange, state } = useFormManager({
        initialValue: selectedRow,
        setSelectedRow: setSelectedRow
    })

    return (
        <Modal
            visible={visible}
            label={"dtls"}
            onOK={onOK}
            onClose={onClose}
        >
            <InputText
                name='name'
                value={state.name}
                onChange={onChange}
                Label='nm'
                width="30%"
            />
            <InputText
                name='date_of_hiring'
                value={state.date_of_hiring}
                onChange={onChange}
                Label='dtfhrng'
                width="30%"
                type='date'
            />
            <InputText
                name='phone'
                value={state.phone}
                onChange={onChange}
                Label='phn'
                width="30%"
                type='number'
            />
            <InputText
                name='address'
                value={state.address}
                onChange={onChange}
                Label='adrs'
                width="30%"
            />
            <InputText
                name='mobile'
                value={state.mobile}
                onChange={onChange}
                Label='mbl'
                width="30%"
                type='number'
            />
            <InputText
                name='email'
                value={state.email}
                onChange={onChange}
                Label='eml'
                width="30%"
            />
            <InputText
                name='job_title'
                value={state.job_title}
                onChange={onChange}
                Label='jbtl'
                width="22%"
            />
            <InputText
                name='salary'
                value={state.salary}
                onChange={onChange}
                Label='slry'
                width="22%"
                type='number'
            />
            <InputText
                name='attendance_time'
                value={state.attendance_time}
                onChange={onChange}
                Label='atndnctm'
                width="22%"
                type='time'
            />
            <InputText
                name='leaving_time'
                value={state.leaving_time}
                onChange={onChange}
                Label='lvngtm'
                width="22%"
                type='time'
            />
        </Modal>
    )
};

export default memo(ModalView)