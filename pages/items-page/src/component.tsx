import React, { memo } from 'react';
import ModalView from "./Partials/ModalView";
import { TableWithApi } from "@commons/table";
import { columns } from "./constants"


const Items = () => {
    return (
        <>
            <TableWithApi
                api={"QUERY_ITEMS_TABLE_DATA"}
                postApi={"POST_ITEMS_TABLE_DATA"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                rowKey={"item_id"}
                ModalContent={ModalView}
                fetchOnFirstRun
                canExcel
            />
        </>
    )
};

export default memo(Items);
