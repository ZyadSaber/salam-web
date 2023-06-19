import React, { memo, useCallback } from 'react';
import { useTableControlsButtons } from "@commons/table";
import { ModalViewProp } from "@commons/global"
import { useFormManager } from "@commons/hooks";
import { InputText } from "@commons/input-text";
import InputNumber from "@commons/input-number"
import { SaveButton } from "@commons/button"

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
        <>
            <InputText
                name='employee_name'
                value={state.employee_name}
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
            <InputNumber
                name='employee_phone'
                value={state.employee_phone}
                onChange={onChange}
                Label='phn'
                width="30%"
            />
            <InputText
                name='employee_address'
                value={state.employee_address}
                onChange={onChange}
                Label='adrs'
                width="30%"
            />
            <InputNumber
                name='employee_mobile'
                value={state.employee_mobile}
                onChange={onChange}
                Label='mbl'
                width="30%"
            />
            <InputText
                name='employee_email'
                value={state.employee_email}
                onChange={onChange}
                Label='eml'
                width="30%"
            />
            <InputText
                name='employee_job_title'
                value={state.employee_job_title}
                onChange={onChange}
                Label='jbtl'
                width="22%"
            />
            <InputNumber
                name='employee_salary'
                value={state.employee_salary}
                onChange={onChange}
                Label='slry'
                width="22%"
            />
            <InputText
                name='employee_attendance_time'
                value={state.employee_attendance_time}
                onChange={onChange}
                Label='atndnctm'
                width="22%"
                type='time'
            />
            <InputText
                name='employee_leaving_time'
                value={state.employee_leaving_time}
                onChange={onChange}
                Label='lvngtm'
                width="22%"
                type='time'
            />
            <SaveButton
                onOK={handleSave}
            />
        </>
    )
};

export default memo(ModalView)