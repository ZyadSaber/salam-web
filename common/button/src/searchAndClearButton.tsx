import React, { memo } from "react"
import Flex from "@commons/flex"
import { primaryColors } from "@commons/global"
import IconButton from "./iconButton"
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
                padding="0"
                height={height}
                margin={margin}
                justifyContent="space-between"
                align="center"
                gap="10px"
            >
                <IconButton
                    hidden={noSearch}
                    disabled={disabled}
                    iconName="search"
                    label="search"
                    onClick={onSearch}
                    width="100%"
                    padding="0 10px"
                    backGround={primaryColors.primary}
                    margin="0"
                    borderRadius="5px"
                />

                <IconButton
                    hidden={noClear}
                    iconName="clear"
                    onClick={onClear}
                    width="30%"
                    padding="0 10px"
                    backGround="transparent"
                    color={primaryColors.lightBlue}
                    margin="0"
                    borderRadius="5px"
                />
            </Flex>
        </>
    )
}

export default memo(SearchAndClearButton)