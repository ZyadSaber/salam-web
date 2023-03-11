import { memo } from "react";
import Text from "../../../components/pageTitle/text";
import LinkButton from "../../../components/button/LinkButton";
import Flex from "../../../components/Flex/Flex";

const SystemTools = () => {
    return (
        <>
            <Text title="SystemTools" margin="20px 10px" />
            <Flex justifyContent="space-around" width="40%" margin="30px" bordered>
                <LinkButton label="users" pathTo="users" width="40%" />
                <LinkButton label="labels" pathTo="labels" width="40%" />
            </Flex>
        </>
    )
}

export default memo(SystemTools)