import { memo } from "react";
import { pageTitleProps } from "./interface";
import { useTranslation } from 'react-i18next';

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