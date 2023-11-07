import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { primaryColors } from "@commons/global";
import { buttonProp } from "./interface";
import { StyledButton } from "./styled"

const Button = ({
    label = "",
    onClick,
    onDoubleClick,
    disabled,
    hidden,
    margin = "10px 0",
    width = "20%",
    height,
    padding = "5px",
    borderRadius = "5px",
    backGround,
    fontWeight = "500",
    loading = false,
    border,
    icon,
    type = "primary"
}: buttonProp) => {
    const { t } = useTranslation()
    return (
        <>
            <StyledButton
                hidden={hidden}
                disabled={disabled || loading}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
                type={type}
                loading={loading}
                margin={margin}
                width={width}
                height={height}
                icon={icon}
                padding={padding}
                borderRadius={borderRadius}
                backGround={backGround ? backGround : primaryColors.primary}
                fontWeight={fontWeight}
                border={border}
            >
                    {t(label)}
            </StyledButton>
        </>
    )
}

export default memo(Button)