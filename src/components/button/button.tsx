import { memo } from 'react';
import './style.css';
import { buttonProp } from "./interface";
import useTranslateLabel from '../../hooks/useTranslateLabel';

const Button = ({
    label,
    onClick,
    disabled,
    className,
    hidden,
    margin,
    width,
    height
}: buttonProp) => {
    const { tran_label } = useTranslateLabel({ label: label })
    console.log(tran_label)
    return (
        <>
            <button className={`button btn btn-primary ${className} `} style={{
                width: `${width}`,
                margin: `${margin}`,
                height: `${height}`,
                display: "inline-block"
            }} onClick={onClick} disabled={disabled} hidden={hidden}>{tran_label ? tran_label : label}</button>
        </>
    )
}

export default memo(Button)