import React, { memo } from "react";
import { useTranslation } from 'react-i18next';
import { FloatingLabelContainer, FloatingLabelLabel } from "./styled"
import { floatingLabelProps } from "./interface";

const FloatingLabel = ({
    hasContent,
    name,
    label = "",
    height,
    width = "200px",
    padding,
    margin,
    children,
    hidden,
    top
}: floatingLabelProps) => {

    const { t } = useTranslation();
    return (
        <>
            <FloatingLabelContainer
            width={width}
            height={height}
            margin={margin}
            padding={padding}
            hidden={hidden}
            >
                {children}
                <FloatingLabelLabel top={top} htmlFor={name} hasContent={hasContent}>
                    {t(label)}
                </FloatingLabelLabel>
            </FloatingLabelContainer>
        </>
    )
}

export default memo(FloatingLabel)
export * from "./interface"