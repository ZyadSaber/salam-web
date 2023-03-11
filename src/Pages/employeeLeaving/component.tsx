import { memo } from "react";
import InputText from "../../components/InputText/InputText";
import SelectWithApi from "../../components/Select/SelectWithApi";
import TextArea from "../../components/InputText/TextArea";
import useFormManager from "../../hooks/useFormManager";
import usePost from "../../hooks/usePost";
import Modal from "../../components/Modal/Modal";

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
    const { date, employee_id, leaving_time, notes } = state

    const { setRow } = usePost({
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
                    name="leaving_time"
                    value={leaving_time}
                    onChange={onChange}
                    Label="lvngtm"
                    width="30%"
                />
                <TextArea
                    name="notes"
                    value={notes}
                    onChange={onChange}
                    Label="nts"
                    width="100%"
                />
            </Modal>
        </>
    )
}

export default memo(EmployeeLeaving)