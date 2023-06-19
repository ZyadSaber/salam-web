import React, { memo } from "react";
import { TableWithApi } from "@commons/table";
import { columns } from "./constants";
import ModalView from "./Partials/ModalView";


const PrintOptions = () => {
    return (
        <>
            <TableWithApi
                api={"QUERY_PRINT_OPTIONS_TABLE_DAT"}
                postApi={"POST_PRINT_OPTIONS_TABLE_DATA"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                rowKey={"print_option_id"}
                ModalContent={ModalView}
                fetchOnFirstRun
                canExcel
            />
        </>
    )
}

export default memo(PrintOptions);