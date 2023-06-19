import React, { memo } from 'react';
import ModalView from "./Partials/ModalView";
import { TableWithApi } from "@commons/table";
import { columns } from "./constants";

const Suppliers = () => {
    return (
        <>
            <TableWithApi
                api={"QUERY_SUPPLIER_TABLE_DATA"}
                postApi={"POST_SUPPLIER_TABLE_DATA"}
                columns={columns}
                hideTools={false}
                canEdit
                canAdd
                canDelete
                rowKey={"supplier_id"}
                ModalContent={ModalView}
                fetchOnFirstRun
                canExcel
            />
        </>
    )
};

export default memo(Suppliers);
