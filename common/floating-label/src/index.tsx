import React, { memo } from "react";
import { useTranslation } from 'react-i18next';
import { FloatingLabelContainer, FloatingLabelLabel } from "./styled"
import { floatingLabelProps } from "./interface";

const FloatingLabel = ({
    value,
    name,
    label = "",
    onChange,
    height,
    width = "200px",
    padding,
    margin = "10px",
    children
}: floatingLabelProps) => {

    const { t } = useTranslation();
    return (
        <>
            <FloatingLabelContainer

            >
                {children}
                <FloatingLabelLabel htmlFor={name} hasContent={value !== '' && !value}>
                    {t(label)}
                </FloatingLabelLabel>
            </FloatingLabelContainer>
        </>
    )
}

export default memo(FloatingLabel)
export * from "./interface"