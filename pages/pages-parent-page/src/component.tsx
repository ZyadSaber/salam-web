import React, { memo } from "react";
import ModalView from "./Partials/ModalView";
import { TableWithApi } from "@commons/table";
import { columns } from "./constants"

const PagesParent = () => {
    return (
        <>
            <TableWithApi
                api={"QUERY_PAGES_PARENT_DATA_TABLE"}
                postApi={"POST_PAGES_PARENT_DATA_TABLE"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                canExcel={false}
                rowKey={"page_parent_id"}
                ModalContent={ModalView}
                fetchOnFirstRun
            />
        </>
    )
}

export default memo(PagesParent)