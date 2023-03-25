import React, { memo } from "react";
import Flex from "@commons/flex";
import { Button } from "@commons/button";
import { Text } from "@commons/page-title";

const Top = () => {
    return (
        <>
            <Flex width="100%" margin="0" padding="5px" justifyContent="space-between">
                <Text title="Salam Company for advertising and marketing" />
                <Text title="Build v 1.2" />
                <Flex margin="0" padding="0" width="15%" justifyContent="space-around">
                    <Button label="sign out" />
                    <Button label="sign out" />
                </Flex>
            </Flex>
        </>
    )
}

export default memo(Top)