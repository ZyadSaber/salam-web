import React, { memo } from "react";
import Button from "./button"
import { iconType } from "./constants"
import { iconButtonProp } from "./interface"

const IconButton = ({
    type,
    backGround = "none",
    margin = "5px",
    ...prop
}: iconButtonProp) => {

    const icon = <i className={type ? iconType[type] : ""}></i>

    return (
        <>
            <Button
                border="none"
                icon={icon}
                padding="0"
                borderRadius="20px"
                margin={margin}
                backGround={backGround}
                {...prop}
            />
        </>
    )
}

export default memo(IconButton)