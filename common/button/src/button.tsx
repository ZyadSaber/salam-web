import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { primaryColors } from "@commons/global";
import Flex from "@commons/flex"
import { buttonProp } from "./interface";
import { StyledButton } from "./styled"

const Button = ({
    label = "",
    onClick,
    onDoubleClick,
    disabled,
    hidden,
    margin = "10px 0",
    width,
    height,
    padding = "5px",
    borderRadius = "5px",
    backGround,
    fontWeight = "500",
    loading = false,
    border,
    icon
}: buttonProp) => {
    const { t } = useTranslation()
    return (
        <>
            <StyledButton
                hidden={hidden}
                disabled={disabled || loading}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
                margin={margin}
                width={width}
                height={height}
                padding={padding}
                borderRadius={borderRadius}
                backGround={backGround ? backGround : primaryColors.primary}
                fontWeight={fontWeight}
                border={border}
            >
                <Flex
                    width="100%"
                    // height="100%"
                    margin="0"
                    padding=""
                    justifyContent={icon ? "space-around" : "center"}
                >
                    {icon && icon}
                    {t(label)}
                </Flex>
            </StyledButton>
        </>
    )
}

export default memo(Button)