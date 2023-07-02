import React, { memo } from 'react';
import ModalView from "./Partials/ModalView";
import { TableWithApi } from "@commons/table";
import { columns } from "./constants"
const UsersPage = () => {
    return (
        <>
            <>
                <TableWithApi
                    api={"QUERY_USERS_TABLE_DATA"}
                    postApi={"POST_USERS_TABLE_DATA"}
                    columns={columns}
                    hideTools={false}
                    canEdit={true}
                    canAdd={true}
                    canDelete={true}
                    canExcel
                    rowKey={"user_id"}
                    ModalContent={ModalView}
                    fetchOnFirstRun
                />
            </>
        </>
    )
}

export default memo(UsersPage)