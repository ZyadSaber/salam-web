import React, { memo } from "react";
import { TableWithApi } from "@commons/table";
import ModalView from "./Partials/ModalView";
import { columns } from "./constant"

const LabelsPage = () => {
    return (
        <>
            <TableWithApi
                api={"QUERY_LABELS_TABLE_DATA"}
                postApi={"POST_LABELS_TABLE_DATA"}
                columns={columns}
                hideTools={false}
                canEdit
                canAdd
                canDelete
                canExcel
                height="500px"
                rowKey="language_code"
                ModalContent={ModalView}
                fetchOnFirstRun
            />
        </>
    )
}

export default memo(LabelsPage)