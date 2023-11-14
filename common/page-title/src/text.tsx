import React, { memo } from "react";
import { useTranslation } from 'react-i18next';
import { pageTitleProps } from "./interface";

const Text = ({
    title,
    width,
    padding,
    margin = "10px"
}: pageTitleProps) => {
    const { t } = useTranslation()
    return (
        <>
            <h4 style={{
                width: width,
                margin: margin,
                padding: padding
            }}>
                {t(title)}
            </h4>
        </>
    )
}

export default memo(Text)