import { memo } from "react";
import { pageTitleProps } from "./interface"

const PageTitla = ({
    title,
    width,
    padding,
    margin = "10px"
}: pageTitleProps) => {

    return (
        <>
            <div style={{
                width: width,
                margin: margin,
                padding: padding
            }}>
                <h1>{title}</h1>
            </div>
        </>
    )
}

export default memo(PageTitla)