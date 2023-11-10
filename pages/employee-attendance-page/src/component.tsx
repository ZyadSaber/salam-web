import React, { memo } from "react";
import { InputText } from "@commons/input-text";
import { SelectWithApi } from "@commons/select";
import { TextArea } from "@commons/input-text";
import { useFormManager, useMutation } from "@commons/hooks";
import { CheckBox } from "@commons/check-box";
import Modal from "@commons/modal";
import DatePicker from "@commons/date-picker";
import { EmployeeAttendanceProps } from "./interface"

const EmployeeAttendance = ({ visible, handleCloseModal }: EmployeeAttendanceProps) => {
    const initialValues = {
        date: "",
        employee_id: "",
        absent: "N",
        query_status: "n",
        attendance_time: ""
    }
    const { onChange, state } = useFormManager({ initialValues: initialValues })
    const { date, employee_id, real_time, absent, reason } = state

    const { setRow } = useMutation({
        link: "POST_EMPLOYEE_ATTENDANCE"
    })

    const handleSaveButton = () => {
        setRow(state)
        handleCloseModal()
    }

    return (
        <>
            <Modal
                label="emplyatndnc"
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
                    name="attendance_time"
                    value={real_time}
                    onChange={onChange}
                    label="atndnctm"
                    width="30%"
                />
                <TextArea
                    name="reason"
                    value={reason}
                    onChange={onChange}
                    label="rsn"
                    width="70%"
                />
                <CheckBox
                    name="absent"
                    label="absnt"
                    value={absent}
                    onChange={onChange}
                />
            </Modal>
        </>
    )
}

export default memo(EmployeeAttendance)