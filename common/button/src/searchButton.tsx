import React, { memo } from "react"
import Button from "./button"
import { buttonProp } from "./interface"

const SearchButton = (prop:buttonProp) => {
    return (
        <>
            <Button
                label="search"
                height="50%"
                {...prop}
            />
        </>
    )
}

export default memo(SearchButton)