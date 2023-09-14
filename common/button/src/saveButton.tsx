import React, { memo } from "react";
import Button from "./button"
import { saveButtonProp } from "./interface"

const SaveButton = ({
    onOK,
    ...props
}: saveButtonProp) => {
    return (
        <>
            <Button onClick={onOK} {...props} />
        </>
    )
}

export default memo(SaveButton)