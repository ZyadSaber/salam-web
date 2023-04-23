import React, { memo } from "react";

interface iconButtonProp {
    icon: string;
    onClick?: () => void;
    disabled?: boolean;
    width?: number | string;
    height?: number | string;
    color?: string;
    margin?: number | string;
    padding?: number | string;
    hidden?: boolean;
}

const IconButton = ({
    icon,
    onClick,
    disabled = false,
    width = "30px",
    height = "30px",
    color,
    margin = "10px",
    padding,
    hidden = false
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
            }} hidden={!hidden} onClick={onClick} disabled={disabled} >
                <i className={icon}></i>
            </button>
        </>
    )
}

export default memo(IconButton)