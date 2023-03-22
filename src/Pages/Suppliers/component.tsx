import { memo } from 'react';
import ModalView from "./Partials/ModalView";
import ApiTable from "../../components/TableView/ApiTable";
import { columns } from "./constants";

const Suppliers = () => {
    return (
        <>
            <ApiTable
                api={"QUERY_SUPPLIER_TABLE_DATA"}
                postApi={"POST_SUPPLIER_TABLE_DATA"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                rowKey={"supplier_id"}
                Modal={ModalView}
                fetchOnFirstRun
            />
        </>
    )
};

export default memo(Suppliers);
