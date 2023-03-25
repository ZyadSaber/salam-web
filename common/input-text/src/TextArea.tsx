import React, { memo, useCallback } from "react";
import { TextAreaProps } from "./interface";
import { useTranslation } from 'react-i18next'

const TextArea = ({
    name,
    Label = "name",
    placeHolder,
    width = "30%",
    height = "100px",
    padding,
    margin = "10px",
    onChange,
    value,
    disabled,
}: TextAreaProps) => {
    const { t } = useTranslation()
    const handleChange = useCallback((event: { target: { value: string; }; }) => {
        onChange({ name: name, value: event.target.value })
    }, [name, onChange])

    return (
        <>
            <div className="mb-1 d-inline-block" style={{
                height: height,
                width: width,
                padding: padding,
                margin: margin
            }}>
                <label htmlFor="exampleFormControlInput1" className="form-label">{t(Label)}</label>
                <textarea className="form-control" placeholder={t(placeHolder)} id="floatingTextarea2Disabled" value={value} disabled={disabled} onChange={handleChange}></textarea>
            </div>
        </>
    )
}

export default memo(TextArea);