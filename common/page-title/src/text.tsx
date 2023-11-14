import React, { memo } from "react";
import { useTranslation } from 'react-i18next';
import { StyledHeading } from "./styles"
import { pageTitleProps } from "./interface";

const Text = ({
    title,
    width,
    padding,
    margin = "10px",
    color,
    backGround,
    fontWeight
}: pageTitleProps) => {
    const { t } = useTranslation()
    return (
        <>
            <StyledHeading width={width} margin={margin} padding={padding} color={color} backGround={backGround} fontWeight={fontWeight}>
                {t(title)}
            </StyledHeading>
        </>
    )
}

export default memo(Text)