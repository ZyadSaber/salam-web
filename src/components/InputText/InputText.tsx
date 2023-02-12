import { memo, useCallback } from "react";
import { InputTextProps } from "./interface"

const InputText = ({
    disabled,
    value,
    name,
    Label,
    onChange,
    width = "200px",
    type = "text",
    placeHolder,
    padding,
    margin = "10px"
}: InputTextProps) => {

    const handleChange = useCallback((event: { target: { value: string; }; }) => {
        onChange({ name: name, value: event.target.value })
    }, [name, onChange])

    return (
        <>
            <div className="mb-1 d-inline-block" style={{ width: width, margin: margin, padding: padding }}>
                <label htmlFor="exampleFormControlInput1" className="form-label">{Label}</label>
                <input type={type} className="form-control" id="exampleFormControlInput1" placeholder={placeHolder} disabled={disabled} onChange={handleChange} value={value} />
            </div>
        </>
    )
}

export default memo(InputText)