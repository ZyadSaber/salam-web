import { memo } from 'react';
import ModalView from "./Partials/ModalView";
import ApiTable from "../../components/TableView/ApiTable";
import { columns } from "./constants"

const Customers = () => {
    return (
        <>
            <ApiTable
                api={"QUERY_CUSTOMER_TABLE_DATA"}
                postApi={"POST_CUSTOMER_TABLE_DATA"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                rowKey={"customer_id"}
                Modal={ModalView}
                fetchOnFirstRun
            />
        </>
    )

};

export default memo(Customers);
