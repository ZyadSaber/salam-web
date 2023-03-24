import { memo } from "react";
import { buttonProp } from "./interface"
import { useTranslation } from 'react-i18next'

const CardButton = ({
    label,
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
    const handleClick = () => { if (!disabled && onClick) { onClick() } }
    return (
        <>
            <div className={`card ${className}`} hidden={hidden} style={{
                width: width,
                height: height,
                margin: margin,
                padding: padding,
            }} onClick={handleClick}>
                {t(label)}
            </div>
        </>
    )
}

export default memo(CardButton)