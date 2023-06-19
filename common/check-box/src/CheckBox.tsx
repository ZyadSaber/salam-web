import React, { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'
import { Checkbox as ChakraCheckBox } from '@chakra-ui/react'
import { CheckBoxProps } from "./interface";

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
            <ChakraCheckBox
                isChecked={checked}
                onChange={handleChange}
                width={width}
                isDisabled={disabled}
                padding={padding}
                margin={margin}
            >
                {t(label)}
            </ChakraCheckBox>
        </>
    )
}

export default memo(CheckBox)