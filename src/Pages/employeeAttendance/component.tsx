import { memo, useEffect } from "react";
import InputText from "../../components/InputText/InputText";
import SelectWithApi from "../../components/Select/SelectWithApi";
import TextArea from "../../components/InputText/TextArea";
import useFormManager from "../../hooks/useFormManager";
import CheckBox from "../../components/checkBox/CheckBox";
import useFetch from "../../hooks/useFetch";
import usePost from "../../hooks/usePost";

const EmployeeAttendance = () => {
    const initialValue = {
        date: "",
        employee_id: "",
        employee_time: "",
        absent: "Y"
    }
    const { onChange, state } = useFormManager({ initialValue: initialValue })
    const { date, employee_id, employee_time, real_time, absent, reason } = state
    const { data: realTime } = useFetch({
        link: "",
        fetchOnFirstRun: true,
        params: {
            employee_id: employee_id,
            type: "attendance"
        }
    })

    // useEffect(() => {
    //     onChange({ name: "real_time", value: realTime.attendance_time })
    // }, [realTime.attendance_time, onChange])

    return (
        <>
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
                name="employee_time"
                value={employee_time}
                onChange={onChange}
                Label="Time to Attendance"
                disabled
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
        </>
    )
}

export default memo(EmployeeAttendance)