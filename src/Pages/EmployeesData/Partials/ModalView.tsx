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
            label={"Details"}
            onOK={onOK}
            onClose={onClose}
        >
            <InputText
                name='name'
                value={state.name}
                onChange={onChange}
                Label='Employee Name'
                width="30%"
            />
            <InputText
                name='date_of_hiring'
                value={state.date_of_hiring}
                onChange={onChange}
                Label='Date of Hiring'
                width="30%"
                type='date'
            />
            <InputText
                name='phone'
                value={state.phone}
                onChange={onChange}
                Label='Phone'
                width="30%"
                type='number'
            />
            <InputText
                name='address'
                value={state.address}
                onChange={onChange}
                Label='Address'
                width="30%"
            />
            <InputText
                name='mobile'
                value={state.mobile}
                onChange={onChange}
                Label='Mobile'
                width="30%"
                type='number'
            />
            <InputText
                name='email'
                value={state.email}
                onChange={onChange}
                Label='Email'
                width="30%"
            />
            <InputText
                name='job_title'
                value={state.job_title}
                onChange={onChange}
                Label='Job Title'
                width="22%"
            />
            <InputText
                name='salary'
                value={state.salary}
                onChange={onChange}
                Label='Salary'
                width="22%"
                type='number'
            />
            <InputText
                name='attendance_time'
                value={state.attendance_time}
                onChange={onChange}
                Label='Attendance Time'
                width="22%"
                type='time'
            />
            <InputText
                name='leaving_time'
                value={state.leaving_time}
                onChange={onChange}
                Label='Leaving Time'
                width="22%"
                type='time'
            />
        </Modal>
    )
};

export default memo(ModalView)