import { memo } from "react";
import InputText from "../../components/InputText/InputText";
import SelectWithApi from "../../components/Select/SelectWithApi";
import TextArea from "../../components/InputText/TextArea";
import useFormManager from "../../hooks/useFormManager";
import CheckBox from "../../components/checkBox/CheckBox";
import usePost from "../../hooks/usePost";
import Modal from "../../components/Modal/Modal";
import Notification from "../../components/Notification/component"

interface EmployeeAttendanceProps {
    visible: boolean;
    handleCloseModal: () => void;
}

const EmployeeAttendance = ({ visible, handleCloseModal }: EmployeeAttendanceProps) => {
    const initialValue = {
        date: "",
        employee_id: "",
        employee_time: "",
        absent: "Y",
        query_status: "n"
    }
    const { onChange, state } = useFormManager({ initialValue: initialValue })
    const { date, employee_id, real_time, absent, reason } = state

    const { setRow, success } = usePost({
        api: ""
    })

    const handleSaveButton = () => {
        setRow(state)
        handleCloseModal()
    }

    return (
        <>
            <Notification
                Label="Alert"
                body={success}
            />
            <Modal
                label="Employee Attendance"
                visible={visible}
                onClose={handleCloseModal}
                onOK={handleSaveButton}
            >
                <InputText
                    Label="Date"
                    name="date"
                    value={date}
                    onChange={onChange}
                    type="date"
                />
                <SelectWithApi
                    name="employee_id"
                    onChange={onChange}
                    Api=""
                    value={employee_id}
                    Label="Employee"
                />
                <InputText
                    type="time"
                    name="real_time"
                    value={real_time}
                    onChange={onChange}
                    Label="Attendance Time"
                />
                <CheckBox
                    name="absent"
                    label="Absent"
                    value={absent}
                    onChange={onChange}
                />
                <TextArea
                    name="reason"
                    value={reason}
                    onChange={onChange}
                    Label="Reason"
                />
            </Modal>
        </>
    )
}

export default memo(EmployeeAttendance)