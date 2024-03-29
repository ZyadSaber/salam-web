import React, { memo } from "react";
import { InputText } from "@commons/input-text";
import { SelectWithApi } from "@commons/select";
import { TextArea } from "@commons/input-text";
import { useMutation, useFormManager } from "@commons/hooks";
import Modal from "@commons/modal";
import DatePicker from "@commons/date-picker";
import { EmployeeLeavingProps } from "./interface"

const EmployeeLeaving = ({ visible, handleCloseModal }: EmployeeLeavingProps) => {
    const initialValues = {
        date: "",
        employee_id: "",
        employee_time: "",
        notes: "",
        query_status: "n"
    }
    const { onChange, state } = useFormManager({ initialValues: initialValues })
    const { date, employee_id, leaving_time, notes } = state

    const { setRow } = useMutation({
        link: "POST_EMPLOYEE_LEAVING"
    })

    const handleSaveButton = () => {
        setRow(state)
        handleCloseModal()
    }

    return (
        <>
            <Modal
                label="emplylvng"
                visible={visible}
                onClose={handleCloseModal}
                onOK={handleSaveButton}
            >
                <DatePicker
                    label="dt"
                    name="date"
                    value={date}
                    onChange={onChange}
                    width="30%"
                />
                <SelectWithApi
                    name="employee_id"
                    onChange={onChange}
                    api="QUERY_EMPLOYEE_NAME_LIST"
                    value={employee_id}
                    label="emply"
                    width="30%"
                    fetchOnFirstRun={visible}
                />
                <InputText
                    type="time"
                    name="leaving_time"
                    value={leaving_time}
                    onChange={onChange}
                    label="lvngtm"
                    width="30%"
                />
                <TextArea
                    name="notes"
                    value={notes}
                    onChange={onChange}
                    label="nts"
                    width="100%"
                />
            </Modal>
        </>
    )
}

export default memo(EmployeeLeaving)