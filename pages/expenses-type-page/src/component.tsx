import React, { memo } from "react";
import ModalView from "./Partials/ModalView";
import { TableWithApi } from "@commons/table";
import { columns } from "./constant"

const ExpensesType = () => {
    return (
        <>
            <TableWithApi
                api={""}
                postApi={""}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                rowKey={"customer_id"}
                Modal={ModalView}
                fetchOnFirstRun
            />
        </>
    )
}

export default memo(ExpensesType)