import { memo } from "react";
import Text from "../../../components/pageTitle/text";
import LinkButton from "../../../components/button/LinkButton";
import Flex from "../../../components/Flex/Flex";

const Reports = () => {
    return (
        <>
            <Text title="rprts" margin="20px 10px" />
            <Flex justifyContent="space-between" width="60%" margin="30px" borderd>
                <LinkButton label="customersSummary" pathTo="customersSummary" width="30%" />
                <LinkButton label="suppliersSummary" pathTo="suppliersSummary" width="30%" />
                <LinkButton label="itemsSummary" pathTo="itemsSummary" width="30%" />
            </Flex>
            <Flex justifyContent="space-between" width="60%" margin="30px" borderd>
                <LinkButton label="dailyTotals" pathTo="dailyTotals" width="30%" />
                <LinkButton label="monthlyTotals" pathTo="monthlyTotals" width="30%" />
                <LinkButton label="yearlyTotals" pathTo="yearlyTotals" width="30%" />
            </Flex>
            <Flex width="60%" margin="30px" borderd>
                <LinkButton label="expensesTotals" pathTo="expensesTotals" width="30%" />
            </Flex>
        </>
    )
}

export default memo(Reports)