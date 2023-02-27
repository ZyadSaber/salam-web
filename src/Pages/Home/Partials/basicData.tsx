import { memo } from "react";
import Text from "../../../components/pageTitle/text";
import LinkButton from "../../../components/button/LinkButton";
import Flex from "../../../components/Flex/Flex";

const BasicData = () => {

    return (
        <>
            <Text title="bscdat" margin="20px 10px" />
            <Flex justifyContent="space-around" width="40%" margin="30px" borderd>
                <LinkButton label="splrs" pathTo="suppliers" width="40%" />
                <LinkButton label="cstmrs" pathTo="customers" width="40%" />
            </Flex>
            <Flex justifyContent="space-around" width="40%" margin="30px" borderd>
                <LinkButton label="itms" pathTo="items" width="40%" />
                <LinkButton label="prntptn" pathTo="printOptions" width="40%" />
            </Flex>
        </>
    )
}

export default memo(BasicData)