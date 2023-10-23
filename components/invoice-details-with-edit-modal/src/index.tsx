import React, {memo} from "react";
import Modal from "@commons/modal";
import { TableWithApi } from "@commons/table";
import {columns} from "./constant"

const InvoiceDetailsWithEditModal = ({visible, onClose, invoiceType, invoiceNumber, withEdit}:any) => {
    const type = invoiceType === "C" ? "customer" : "supplier"
    return (
        <Modal
        visible={visible}
        label={invoiceType === "C" ? "cstmrs" : "splrs"}
        onClose={onClose}
        noFooter
        >
            <TableWithApi
                api="QUERY_INVOICE_DETAIL_TABLE_DATA"
                rowKey={`${type}_invoice_id`}
                params={{
                    invoice_type: invoiceType,
                    invoice_no: invoiceNumber
                }}
                columns={columns}
                hideTools={!withEdit}
                canDelete
                fetchOnFirstRun
                checkForParams={false}
            />
        </Modal>
    )
}

export default memo(InvoiceDetailsWithEditModal)