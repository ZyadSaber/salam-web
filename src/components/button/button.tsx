import { memo } from 'react';
import './style.css';

interface buttonProp {
    label: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    hidden?: boolean;
}

const Button = ({
    label,
    onClick,
    disabled,
    className,
    hidden
}: buttonProp) => {
    return (
        <>
            <button className={`button ${className}`} onClick={onClick} disabled={disabled} hidden={hidden}>{label}</button>
        </>
    )
}

export default memo(Button)