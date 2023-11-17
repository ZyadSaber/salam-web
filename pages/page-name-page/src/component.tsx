import React, { memo } from "react";
import ModalView from "./Partials/ModalView";
import { TableWithApi } from "@commons/table";
import { columns } from "./constants"

const PageName = () => {
    return (
        <>
            <TableWithApi
                api={"QUERY_PAGE_NAME_MAIN_TABLE"}
                postApi={"POST_PAGE_NAME_MAIN_TABLE"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                canExcel
                rowKey={"page_id"}
                ModalContent={ModalView}
                fetchOnFirstRun
                height="400px"
            />
        </>
    )
}

export default memo(PageName)