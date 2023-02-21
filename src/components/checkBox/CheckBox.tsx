import { memo, useCallback, useEffect, useState } from "react";
import { CheckBoxProps } from "./interface";
import useTranslateLabel from '../../hooks/useTranslateLabel';

const CheckBox = ({
    label = "",
    value,
    onChange,
    name,
    width,
    disabled,
    padding,
    margin = "10px"
}: CheckBoxProps) => {
    const [checked, setChecked] = useState(false)
    const { tran_label } = useTranslateLabel({ label: label })
    const handleChange = useCallback((event: { target: { checked: boolean; }; }) => {
        if (event.target.checked === true) {
            onChange({ name: name, value: "Y" })
        } else if (event.target.checked === false) {
            onChange({ name: name, value: "N" })
        }
    }, [name, onChange])

    useEffect(() => {
        if (value === "Y") {
            setChecked(true)
        } else if (value === "N") {
            setChecked(false)
        }
    }, [value])

    return (
        <>
            <div className="form-check" style={{
                width: width,
                padding: padding,
                margin: margin
            }}>
                <input className="form-check-input" type="checkbox" checked={checked} id="flexCheckIndeterminate" onChange={handleChange} disabled={disabled} />
                <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                    {tran_label ? tran_label : label}
                </label>
            </div>
        </>
    )
}

export default memo(CheckBox)