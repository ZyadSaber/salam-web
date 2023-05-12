import React, { memo, useEffect, useState } from "react";
import { flexProp } from "./interface"

const Flex = ({
    children,
    justifyContent,
    width,
    height,
    padding = "10px",
    margin,
    bordered = false,
    backgroundColor,
    borderColor = "#3c8dcf",
    borderWidth = "px",
    borderRadius = "5px",
    flexDirection = "row",
    textAlign = "",
    hidden = false,
}: flexProp) => {
    const [border, setBorder] = useState("")
    useEffect(() => {
        if (bordered) {
            setBorder(`${borderWidth} solid ${borderColor}`)
        }
    }, [borderColor, borderWidth, bordered])
    return (
        <>
            <div
                hidden={hidden}
                style={{
                    display: "flex",
                    justifyContent: justifyContent,
                    width: width,
                    maxWidth: width,
                    height: height,
                    maxHeight: height,
                    padding: padding,
                    margin: margin,
                    border: border,
                    borderRadius: borderRadius,
                    background: backgroundColor,
                    //@ts-ignore
                    flexDirection: flexDirection,
                    //@ts-ignore
                    textAlign: textAlign,
                }}>
                {children}
            </div>
        </>
    )
}

export default memo(Flex)