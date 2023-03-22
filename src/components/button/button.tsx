import { memo } from 'react';
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
    padding,
    additionalStyle = ""
}: buttonProp) => {
    const { t } = useTranslation()
    return (
        <>
            <button className={`button btn btn-primary ${className} `} style={{
                width: `${width}`,
                margin: `${margin}`,
                height: `${height}`,
                padding: padding,
                display: "inline-block",
                //@ts-ignore
                additionalStyle
            }} onClick={onClick} disabled={disabled} hidden={hidden}>{t(label)}</button>
        </>
    )
}

export default memo(Button)