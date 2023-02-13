import { memo } from "react";
import InputText from "../../components/InputText/InputText";
import SelectWithApi from "../../components/Select/SelectWithApi";
import TextArea from "../../components/InputText/TextArea";
import useFormManager from "../../hooks/useFormManager";
import CheckBox from "../../components/checkBox/CheckBox";
import usePost from "../../hooks/usePost";
import Modal from "../../components/Modal/Modal";
import Notification from "../../components/Notification/component"

interface EmployeeLeavingProps {
    visible: boolean;
    handleCloseModal: () => void;
}

const EmployeeLeaving = ({ visible, handleCloseModal }: EmployeeLeavingProps) => {
    const initialValue = {
        date: "",
        employee_id: "",
        employee_time: "",
        notes: "",
        query_status: "n"
    }
    const { onChange, state } = useFormManager({ initialValue: initialValue })
    const { date, employee_id, real_time, notes } = state

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
                label="Employee Leaving"
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
                        />
                        <InputText
                            type="time"
                            name="real_time"
                            value={real_time}
                            onChange={onChange}
                            Label="Leaving Time"
                            width="33%"
                        />
                    </div>
                    <div style={{ display: "flex" }}>
                        <TextArea
                            name="notes"
                            value={notes}
                            onChange={onChange}
                            Label="Notes"
                            width="100%"
                        />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default memo(EmployeeLeaving)