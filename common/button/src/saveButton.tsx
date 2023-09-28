import React, { memo } from "react";
import Button from "./button"
import { saveButtonProp } from "./interface"

const SaveButton = ({
    onOK,
    width,
    label = "sv",
    ...props
}: saveButtonProp) => {
    return (
        <>
            <Button onClick={onOK} label="sv" width="20%" {...props} />
        </>
    )
}

export default memo(SaveButton)