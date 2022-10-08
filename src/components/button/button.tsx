import { memo } from 'react';
import './style.css';

interface buttonProp {
    label: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

const Button = ({
    label,
    onClick,
    disabled,
    className,
}: buttonProp) => {
    return (
        <>
            <button className={`button ${className}`} onClick={onClick} disabled={disabled}>{label}</button>
        </>
    )
}

export default memo(Button)