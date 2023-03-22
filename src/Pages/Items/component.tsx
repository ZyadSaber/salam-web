import { memo } from 'react';
import ModalView from "./Partials/ModalView";
import ApiTable from "../../components/TableView/ApiTable";
import { columns } from "./constants"


const Items = () => {
    return (
        <>
            <ApiTable
                api={"QUERY_ITEMS_TABLE_DATA"}
                postApi={"POST_ITEMS_TABLE_DATA"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                rowKey={"item_id"}
                Modal={ModalView}
                fetchOnFirstRun
            />
        </>
    )
};

export default memo(Items);
