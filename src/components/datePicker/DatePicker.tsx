import { memo, useCallback } from "react";

interface DatePickerProp {
    value?: string;
    setValue?: any
}

const DatePicker = ({ setValue, value }: DatePickerProp) => {
    //@ts-ignore
    const handleChange = useCallback((event) => {
        setValue(event.target.value)
    }, [setValue])

    return (
        <>
            <div className="datePicker">
                <input type="date" value={value} onChange={handleChange}></input>
            </div>

            <div className="mb-1" >
                {/* <label htmlFor="exampleFormControlInput1" className="form-label">{Label}</label> */}
                <input type="date" className="form-control" id="exampleFormControlInput1" onChange={handleChange} value={value} />
            </div>
        </>
    )
}

export default memo(DatePicker)