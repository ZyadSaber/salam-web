import React, { memo, useEffect, useState } from "react";
import { Flex as ChackraFlex } from "@chakra-ui/react"
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
    wrap,
    ...prop
}: any) => {
    const [border, setBorder] = useState("")
    useEffect(() => {
        if (bordered) {
            setBorder(`${borderWidth} solid ${borderColor}`)
        }
    }, [borderColor, borderWidth, bordered])
    return (
        <>
            <ChackraFlex
                width={width}
                height={height}
                padding={padding}
                margin={margin}
                background={backgroundColor}
                borderRadius={borderRadius}
                flexDirection={flexDirection}
                textAlign={textAlign}
                justifyContent={justifyContent}
                hidden={hidden}
                //@ts-ignore
                wrap={wrap ? "wrap" : ""}
                {...prop}
            >
                {children}
            </ChackraFlex>
        </>
    )
}

export default memo(Flex)