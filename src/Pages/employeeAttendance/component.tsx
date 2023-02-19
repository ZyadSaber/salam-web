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
        absent: "N",
        query_status: "n",
        attendance_time: ""
    }
    const { onChange, state } = useFormManager({ initialValue: initialValue })
    const { date, employee_id, real_time, absent, reason } = state

    const { setRow, success } = usePost({
        api: "employeesData/employee_attendance_dml"
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
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex" }}>
                        <InputText
                            Label="Date"
                            name="date"
                            value={date}
                            onChange={onChange}
                            type="date"
                            width="33%"
                        />
                        <SelectWithApi
                            name="employee_id"
                            onChange={onChange}
                            Api="employeesData/pop_employee_name"
                            value={employee_id}
                            Label="Employee"
                            width="33%"
                            fetchOnFirstRun={visible}
                        />
                        <InputText
                            type="time"
                            name="attendance_time"
                            value={real_time}
                            onChange={onChange}
                            Label="Attendance Time"
                            width="33%"
                        />
                    </div>
                    <div style={{ display: "flex" }}>
                        <TextArea
                            name="reason"
                            value={reason}
                            onChange={onChange}
                            Label="Reason"
                        />
                        <CheckBox
                            name="absent"
                            label="Absent"
                            value={absent}
                            onChange={onChange}
                        />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default memo(EmployeeAttendance)