import React, { memo } from 'react';
import { TableWithApi } from "@commons/table";
import ModalView from "./Partials/ModalView";
import { columns } from "./constants"

const Customers = () => {
    return (
        <>
            <TableWithApi
                api={"QUERY_CUSTOMER_TABLE_DATA"}
                postApi={"POST_CUSTOMER_TABLE_DATA"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                canExcel
                rowKey={"customer_id"}
                ModalContent={ModalView}
                fetchOnFirstRun
            />
        </>
    )

};

export default memo(Customers);
