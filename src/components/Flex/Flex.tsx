import { memo, useEffect, useState } from "react";
import { flexProp } from "./interface"

const Flex = ({
    children,
    justifyContent,
    width,
    height,
    padding = "10px",
    margin,
    borderd = false,
    borderColor = "#3c8dcf",
    borderWidth = "px",
    borderRadius = "5px"
}: flexProp) => {
    const [border, setBorder] = useState("")
    useEffect(() => {
        if (borderd) {
            setBorder(`${borderWidth} solid ${borderColor}`)
        }
    }, [borderColor, borderWidth, borderd])
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
                borderRadius: borderRadius
            }}>
                {children}
            </div>
        </>
    )
}

export default memo(Flex)