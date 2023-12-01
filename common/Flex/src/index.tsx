import React, { memo } from "react";
import {StyledFlex} from "./style"
import { flexProps } from "./interface"

const Flex = ({
    children,
    justifyContent,
    width,
    height,
    padding,
    margin,
    bordered = false,
    backgroundColor,
    borderColor = "#3c8dcf",
    borderWidth,
    borderRadius = "5px",
    flexDirection = "row",
    align,
    hidden = false,
    gap,
    wrap,
    minHeight,
    ...prop
}: flexProps) => {
    return (
        <>
            <StyledFlex
                width={width}
                height={height}
                minHeight={minHeight}
                padding={padding}
                margin={margin}
                backgroundColor={backgroundColor}
                borderRadius={borderRadius}
                flexDirection={flexDirection}
                align={align}
                justifyContent={justifyContent}
                hidden={hidden}
                wrap={wrap}
                gap={gap}
                {...prop}
            >
                {children}
            </StyledFlex>
        </>
    )
}

export default memo(Flex);
export * from "./interface"