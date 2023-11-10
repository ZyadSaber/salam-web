import React, { memo } from "react";
import {StyledFlex} from "./style"
import { flexProps } from "./interface"

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
}: flexProps) => {
    return (
        <>
            <StyledFlex
                width={width}
                height={height}
                padding={padding}
                margin={margin}
                backgroundColor={backgroundColor}
                borderRadius={borderRadius}
                flexDirection={flexDirection}
                textAlign={textAlign}
                justifyContent={justifyContent}
                hidden={hidden}
                {...prop}
            >
                {children}
            </StyledFlex>
        </>
    )
}

export default memo(Flex);
export * from "./interface"