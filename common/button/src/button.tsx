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
    backGround = "cyan.300",
    color = "white.200",
    //solid, ghost, outline, or link.
    variant = "outline",
    //xs, sm, md, or lg
    size = "md",
    ...prop
}: buttonProp) => {
    const { t } = useTranslation()
    return (
        <>
            <ChakraButton
                colorScheme={color}
                variant={variant}
                bg={backGround}
                width={width}
                onClick={onClick}
                disabled={disabled}
                hidden={hidden}
                margin={margin}
                padding={padding}
                height={height}
                textDecoration={"none"}
                border={0}
                size={size}
                {...prop}
            >
                {t(label)}
            </ChakraButton>
        </>
    )
}

export default memo(Button)