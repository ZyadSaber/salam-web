import React, { memo } from "react";
import { InputText } from "@commons/input-text";
import { SelectWithApi } from "@commons/select";
import { TextArea } from "@commons/input-text";
import { usePost, useFormManager } from "@commons/hooks";
import Modal from "@commons/modal";
import { EmployeeLeavingProps } from "./interface"

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