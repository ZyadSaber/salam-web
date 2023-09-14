import React, { memo, useCallback } from "react";
import { useTranslation } from 'react-i18next'
import { CheckBoxProps } from "./interface";
import styled from "@emotion/styled";

const CheckBox = ({
    label = "",
    value,
    onChange,
    name,
    width,
    height,
    disabled,
    padding,
    margin = "10px"
}: CheckBoxProps) => {
    const { t } = useTranslation()
    const handleChange = useCallback((event: { target: { checked: boolean; }; }) => {
        if (event.target.checked === true) {
            onChange({ name: name, value: "Y" })
        } else if (event.target.checked === false) {
            onChange({ name: name, value: "N" })
        }
    }, [name, onChange])

    const checked = value === "Y" ? true : false

    const StyledCheckBox = styled.input`
        width: ${width};
        height: ${height};
        padding: ${padding};
        margin:${margin};
    `

    return (
        <>
            <StyledCheckBox
                checked={checked}
                type="checkbox"
                onChange={handleChange}
                disabled={disabled}
            >
                {t(label)}
            </StyledCheckBox>
        </>
    )
}

export default memo(CheckBox)