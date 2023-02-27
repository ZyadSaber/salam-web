import { memo } from 'react';
import './style.css';
import { buttonProp } from "./interface";
import { useTranslation } from 'react-i18next'

const Button = ({
    label = "",
    onClick,
    disabled,
    className,
    hidden,
    margin,
    width,
    height,
    padding
}: buttonProp) => {
    const { t } = useTranslation()
    return (
        <>
            <button className={`button btn btn-primary ${className} `} style={{
                width: `${width}`,
                margin: `${margin}`,
                height: `${height}`,
                padding: padding,
                display: "inline-block"
            }} onClick={onClick} disabled={disabled} hidden={hidden}>{t(label)}</button>
        </>
    )
}

export default memo(Button)