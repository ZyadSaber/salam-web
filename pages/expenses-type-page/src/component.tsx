import React, { memo } from "react";
import ModalView from "./Partials/ModalView";
import { TableWithApi } from "@commons/table";
import { columns } from "./constant"

const ExpensesType = () => {
    return (
        <>
            <TableWithApi
                api={"QUERY_EXPENSES_TYPES_TABLE_DATA"}
                postApi={"POST_EXPENSES_TYPES_TABLE_DATA"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                rowKey={"expense_id"}
                ModalContent={ModalView}
                fetchOnFirstRun
                canExcel
            />
        </>
    )
}

export default memo(ExpensesType)