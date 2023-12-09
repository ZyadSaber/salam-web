import React, { memo, useCallback } from 'react';
import { useTableControlsButtons } from "@commons/table";
import Flex from "@commons/flex";
import { ModalViewProp } from "@commons/global"
import { useFormManager } from "@commons/hooks";
import { InputText } from "@commons/input-text";
import InputNumber from "@commons/input-number"
import { SaveButton } from "@commons/button"
import DatePicker from "@commons/date-picker";
import TimePicker from "@commons/time-picker";

const ModalView = ({
    onClose,
    selectedRow,
    refreshTable
}: ModalViewProp) => {

    const {
        onChange,
        state
    } = useFormManager({
        initialValues: {
            ...selectedRow
        }
    })

    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_EMPLOYEES_TABLE_DATA", runFetch: refreshTable })

    const handleSave = useCallback(() => {
        const record = state
        onSaveAndInsertion(record)
        onClose()
    }, [state, onSaveAndInsertion, onClose])

    return (
        <Flex width='100%' wrap gap='10px'>
            <InputText
                name='employee_name'
                value={state.employee_name}
                onChange={onChange}
                label='nm'
                width="30%"
            />
            <DatePicker
                name='date_of_hiring'
                value={state.date_of_hiring}
                onChange={onChange}
                label='dtfhrng'
                width="30%"
                // dateFormat="hoursAndMinutes"
                showTime
                picker="time"
            />
            <InputNumber
                name='employee_phone'
                value={state.employee_phone}
                onChange={onChange}
                label='phn'
                width="30%"
            />
            <InputText
                name='employee_address'
                value={state.employee_address}
                onChange={onChange}
                label='adrs'
                width="30%"
            />
            <InputNumber
                name='employee_mobile'
                value={state.employee_mobile}
                onChange={onChange}
                label='mbl'
                width="30%"
            />
            <InputText
                name='employee_email'
                value={state.employee_email}
                onChange={onChange}
                label='eml'
                width="30%"
            />
            <InputText
                name='employee_job_title'
                value={state.employee_job_title}
                onChange={onChange}
                label='jbtl'
                width="22%"
            />
            <InputNumber
                name='employee_salary'
                value={state.employee_salary}
                onChange={onChange}
                label='slry'
                width="22%"
            />
            <TimePicker
                name='employee_attendance_time'
                value={state.employee_attendance_time}
                onChange={onChange}
                label='atndnctm'
                width="22%"
                // type='time'
            />
            <TimePicker
                name='employee_leaving_time'
                value={state.employee_leaving_time}
                onChange={onChange}
                label='lvngtm'
                width="22%"
                // type='time'
            />
            <SaveButton
                onOK={handleSave}
            />
        </Flex>
    )
};

export default memo(ModalView)