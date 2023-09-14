import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { buttonProp } from "./interface";

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
    backGround = "#04ecec",
    fontWeight = "500",
}: buttonProp) => {
    const { t } = useTranslation()
    const StyledButton = styled.button`
        margin: ${margin};
        height: ${height};
        padding:${padding};
        width: ${width};
        background-color: ${backGround};
        border-radius: ${borderRadius};
        font-weight: ${fontWeight};
    `
    return (
        <>
            <StyledButton hidden={hidden} disabled={disabled} onClick={onClick} onDoubleClick={onDoubleClick} >
                {t(label)}
            </StyledButton>
        </>
    )
}

export default memo(Button)