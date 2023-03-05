import { memo } from "react";
import Text from "../../../components/pageTitle/text";
import LinkButton from "../../../components/button/LinkButton";
import Flex from "../../../components/Flex/Flex";

const IncomeAndExpens = () => {

    return (
        <>
            <Text title="incmandexpns" margin="20px 10px" />
            <Flex justifyContent="space-around" width="40%" margin="30px" bordered>
                <LinkButton label="pay" pathTo="#" width="40%" />
                <LinkButton label="expens" pathTo="#" width="40%" />
            </Flex>
            <Flex justifyContent="space-around" width="40%" margin="30px" bordered>
                <LinkButton label="return" pathTo="#" width="40%" />
                <LinkButton label="bla" pathTo="#" width="40%" />
            </Flex>
        </>
    )
}

export default memo(IncomeAndExpens)