import React, { memo } from "react";
import { ApiTable } from "@commons/table";
import { columns } from "./constants";
import ModalView from "./Partials/ModalView";


const PrintOptions = () => {
    return (
        <>
            <ApiTable
                api={"QUERY_PRINT_OPTIONS_TABLE_DAT"}
                postApi={"POST_PRINT_OPTIONS_TABLE_DATA"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                rowKey={"print_id"}
                Modal={ModalView}
                fetchOnFirstRun
            />
        </>
    )
}

export default memo(PrintOptions);