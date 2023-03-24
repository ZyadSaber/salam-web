import { memo } from "react";

interface iconButtonProp {
    icon: string;
    onClick?: () => void;
    disabled?: boolean;
    width?: number | string;
    height?: number | string;
    color?: string;
    margin?: number | string;
    padding?: number | string;
}

const IconButton = ({
    icon,
    onClick,
    disabled = true,
    width = "30px",
    height = "30px",
    color,
    margin = "10px",
    padding
}: iconButtonProp) => {
    return (
        <>
            <button style={{
                border: "none",
                width: width,
                height: height,
                backgroundColor: color,
                padding: padding,
                margin: margin,
                borderRadius: "20px"
            }} hidden={!disabled} onClick={onClick} >
                <i className={icon}></i>
            </button>
        </>
    )
}

export default memo(IconButton)