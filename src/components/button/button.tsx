import React, { memo } from 'react';
import './style.css';

interface buttonProp {
    label: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    hidden?: boolean;
    width?: string;
    margin?: string;
    height?: string
}

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
    return (
        <>
            <button className={`button btn btn-primary ${className}`} style={{
                width: `${width}`,
                margin: `${margin}`,
                height: `${height}`
            }} onClick={onClick} disabled={disabled} hidden={hidden}>{label}</button>
        </>
    )
}

export default memo(Button)