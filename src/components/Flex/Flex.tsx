import { memo, useEffect, useState } from "react";
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
    textAlign = ""
}: flexProp) => {
    const [border, setBorder] = useState("")
    useEffect(() => {
        if (bordered) {
            setBorder(`${borderWidth} solid ${borderColor}`)
        }
    }, [borderColor, borderWidth, bordered])
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: justifyContent,
                width: width,
                height: height,
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