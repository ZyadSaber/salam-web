import React, { memo } from "react"
import IconButton from "./iconButton"
import Flex from "@commons/flex"
import { primaryColors } from "@commons/global"
import { searchClearProp } from "./interface"

const SearchAndClearButton = ({
    width,
    onSearch,
    height,
    margin = "0",
    onClear,
    noSearch,
    noClear,
    disabled,
}: searchClearProp) => {
    return (
        <>
            <Flex
                width={width}
                padding={0}
                height={height}
                margin={margin}
                justifyContent="space-between"
            >
                <IconButton
                    hidden={noSearch}
                    disabled={disabled}
                    type="search"
                    label="search"
                    height="100%"
                    onClick={onSearch}
                    width="70%"
                    padding="0"
                    backGround={primaryColors.primary}
                    margin="0"
                />

                <IconButton
                    hidden={noClear}
                    type="clear"
                    height="100%"
                    onClick={onClear}
                    width="25%"
                    padding="0"
                    backGround={primaryColors.white}
                    margin="0"
                />
            </Flex>
        </>
    )
}

export default memo(SearchAndClearButton)