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
    margin,
    width = "5%",
    height,
    padding,
    borderRadius = "5px",
    backGround,
    fontWeight = "100",
    loading = false,
    border,
    icon,
    type = "primary",
    fontSize,
    color
}: buttonProp) => {
    const { t } = useTranslation()
    return (
        <>
          {!hidden &&<StyledButton
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
                fontSize={fontSize}
                border={border}
                color={color}
            >
                    {t(label)}
            </StyledButton>}
        </>
    )
}

export default memo(Button)