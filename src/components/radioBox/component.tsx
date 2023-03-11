import { memo, useCallback } from "react";
import { radioBoxProps, option } from "./interface"
import "./style.css";
import { useTranslation } from 'react-i18next'

const RadioBox = ({
    name,
    options,
    width,
    onChange,
    value,
    Label,
    margin = "10px",
    padding
}: radioBoxProps) => {
    const { t } = useTranslation()
    const handleChange = useCallback((value: string | number) => {
        onChange({ name: name, value: value })
    }, [name, onChange])
    return (
        <>
            <div className="mb-1" style={{
                width: width,
                margin: margin,
                padding: padding
            }}>
                <label htmlFor="exampleFormControlInput1" className="form-label">{Label}</label>
                <div className="radio flex-row form-control " style={{ display: "flex" }} >
                    {options.map((option: option) => {
                        return (
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={option.checked || value === option.value} onClick={() => { handleChange(option.value) }} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    {t(option.label)}
                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default memo(RadioBox)