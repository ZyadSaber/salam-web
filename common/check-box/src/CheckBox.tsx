import React, { memo, useCallback, useEffect, useState } from "react";
import { CheckBoxProps } from "./interface";
import { useTranslation } from 'react-i18next'

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
    const { t } = useTranslation()
    const [checked, setChecked] = useState(false)
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
                    {console.log(label)}
                    {t(label)}
                </label>
            </div>
        </>
    )
}

export default memo(CheckBox)