import { memo } from "react";
import InputText from "../../components/InputText/InputText";
import SelectWithApi from "../../components/Select/SelectWithApi";
import TextArea from "../../components/InputText/TextArea";
import useFormManager from "../../hooks/useFormManager";
import CheckBox from "../../components/checkBox/CheckBox";
import usePost from "../../hooks/usePost";
import Modal from "../../components/Modal/Modal";

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

    const { setRow } = usePost({
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
                <InputText
                    Label="dt"
                    name="date"
                    value={date}
                    onChange={onChange}
                    type="date"
                    width="30%"
                />
                <SelectWithApi
                    name="employee_id"
                    onChange={onChange}
                    Api="QUERY_EMPLOYEE_NAME_LIST"
                    value={employee_id}
                    Label="emply"
                    width="30%"
                    fetchOnFirstRun={visible}
                />
                <InputText
                    type="time"
                    name="attendance_time"
                    value={real_time}
                    onChange={onChange}
                    Label="atndnctm"
                    width="30%"
                />
                <TextArea
                    name="reason"
                    value={reason}
                    onChange={onChange}
                    Label="rsn"
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