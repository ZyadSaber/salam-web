import { memo } from "react";
import Text from "../../../components/pageTitle/text";
import LinkButton from "../../../components/button/LinkButton";
import Flex from "../../../components/Flex/Flex";

const Invoices = () => {
    return (
        <>
            <Text title="invcs" margin="20px 10px" />
            <Flex justifyContent="space-around" width="60%" margin="30px" borderd>
                <LinkButton label="splrsinvcs" pathTo="supplierInvoices" width="30%" />
                <LinkButton label="cstmrsinvs" pathTo="customerInvoices" width="30%" />
                <LinkButton label="invsrch" pathTo="invoicesSearch" width="30%" />
            </Flex>
        </>
    )
}

export default memo(Invoices)