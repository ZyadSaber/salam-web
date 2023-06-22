import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button as ChakraButton } from '@chakra-ui/react'
//@ts-ignore
import { NavLink } from 'react-router-dom';
import { linkButtonProp } from "./interface";


const LinkButton = ({
    label = "",
    hidden,
    margin,
    width,
    height,
    padding = "10px",
    pathTo = "",
    color = "white.200",
    //solid, ghost, outline, or link.
    variant = "outline",
    //xs, sm, md, or lg
    size = "md",
    disabled = false,
    onClick,
    target = "",
    bg = "cyan.300"
}: linkButtonProp) => {
    const { t } = useTranslation()

    return (
        <>
            <NavLink to={`/${pathTo}`} style={{ textDecoration: "none", width: "100%" }}>
                <ChakraButton
                    color={color}
                    bg={bg}
                    variant={variant}
                    width={width}
                    onClick={onClick}
                    disabled={disabled}
                    hidden={hidden}
                    margin={margin}
                    padding={padding}
                    height={height}
                    size={size}
                >
                    {t(label)}
                </ChakraButton >
            </NavLink>
        </>
    )
}

export default memo(LinkButton)