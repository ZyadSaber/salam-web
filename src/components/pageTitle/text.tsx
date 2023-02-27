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
            <div style={{
                width: width,
                margin: margin,
                padding: padding
            }}>
                <h4>{t(title)}</h4>
            </div>
        </>
    )
}

export default memo(Text)