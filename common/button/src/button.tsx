import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button as ChakraButton } from '@chakra-ui/react'
import { buttonProp } from "./interface";

const Button = ({
    label = "",
    onClick,
    disabled,
    hidden,
    margin,
    width,
    height,
    padding,
    color = "blue",
    //solid, ghost, outline, or link.
    variant = "solid",
    //xs, sm, md, or lg
    size = "md",
    leftIcon = <></>,
    rightIcon = <></>,
    position = "unset"
}: buttonProp) => {
    const { t } = useTranslation()
    return (
        <>
            <ChakraButton
                colorScheme={color}
                variant={variant}
                //@ts-ignore
                leftIcon={leftIcon}
                //@ts-ignore
                rightIcon={rightIcon}
                width={width}
                onClick={onClick}
                disabled={disabled}
                hidden={hidden}
                margin={margin}
                padding={padding}
                height={height}
                size={size}
                //@ts-ignore
                position={position}
            >
                {t(label)}
            </ChakraButton>
        </>
    )
}

export default memo(Button)