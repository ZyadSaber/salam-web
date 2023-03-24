import React, { memo } from "react";
import { pageTitleProps } from "./interface";
import { useTranslation } from 'react-i18next';

const PageTitle = ({
    title,
    width,
    padding,
    margin = "10px"
}: pageTitleProps) => {
    const { t } = useTranslation()
    return (
        <>
            <div style={{
                width: width,
                margin: margin,
                padding: padding
            }}>
                <h1>{t(title)}</h1>
            </div>
        </>
    )
}

export default memo(PageTitle)