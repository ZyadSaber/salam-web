import React, { memo, useCallback } from "react";
import { useTranslation } from 'react-i18next'
import styled from "@emotion/styled";
import { Flex, FormLabel } from "@chakra-ui/react"
import { CheckBoxProps } from "./interface";

const CheckBox = ({
    label = "",
    value,
    onChange,
    name,
    unCheckedColor = "#33455e",
    checkedColor = "#ff6e48",
    width,
    height,
    disabled,
    padding,
    margin = "10px"
}: any) => {
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
        display: none;
        width: 100%;
        height: 100%;
    `

    const StyledLabel = styled.label`
        position: relative;
        display: inline-block;
        width: 5.5rem;
        height: 2rem;
    `

    const StyledSpan = styled.span`
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        background-color: ${disabled ? "#81838f" : checked ? checkedColor : unCheckedColor};
        display: block;
        transition: all 0.3s;
        border-radius: 2rem;
        cursor: pointer;

        &:before {
            content: "";
            position: absolute;
            height: 1.4rem;
            width: 1.5rem;
            border-radius: 100%;
            display: block;
            left: 0.5rem;
            bottom: 0.3rem;
            background-color: white;
            transition: all 0.3s;
            transform: translate(${checked ? "200%" : 0}, 0);
        }
    `

    return (
        <>
            <Flex
                direction="column"
                width={width}
                padding={padding}
                margin={margin}
                height={height}
            >
                <FormLabel>{t(label)}</FormLabel>
                <StyledLabel>
                    <StyledCheckBox type="checkbox" onChange={handleChange} checked={checked} disabled={disabled} />
                    <StyledSpan />
                </StyledLabel>
            </Flex>
            {/* <StyledCheckBox
                checked={checked}
                type="checkbox"
                onChange={handleChange}
                disabled={disabled}
            >
                {t(label)}
            </StyledCheckBox> */}
        </>
    )
}

export default memo(CheckBox)