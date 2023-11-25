import React, { memo, useCallback, useState } from "react";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import Flex from "@commons/flex";
import { useFormManager } from "@commons/hooks";
import FormView from "./Partials/FormView";
import ModalView from "./Partials/ModalView";
import { mainTableColumns, detailTableColumns, initialFormValues } from "./constant";

const InvoicesSearch = () => {
    const [invoiceNo, setInvoiceNo] = useState(0)
    const {
        tableRef,
        fetchTableData,
    } = useCreateTableActionRef()
    const {
        tableRef: detailTableRef,
        fetchTableData: fetchDetailTableData,
    } = useCreateTableActionRef()

    //TODO: change that type to invoice_type
    const handleSelectedRow = useCallback((e: any) => {
        fetchDetailTableData({
            invoice_type: e.invoice_type,
            invoice_no: e.invoice_id
        })
        setInvoiceNo(e.invoice_id)
    }, [fetchDetailTableData])

    const {
        state
        , onChange
    } = useFormManager({
        initialValues: initialFormValues
    })

    return (
        <>
            <Flex width="100%" margin="0" padding="0" flexDirection="column">
                <FormView
                    fetchTableData={fetchTableData}
                    state={state}
                    onChange={onChange}
                />
                <Flex width="100%" margin="0" padding="0" justifyContent="space-between">
                    <Flex width="49%"
                    flexDirection="column"
                    >
                        <TableWithApi
                            ref={tableRef}
                            api="QUERY_INVOICE_MASTER_TABLE_DATA"
                            postApi={state.invoice_type === "C" ? "POST_CUSTOMER_INVOICES" : "POST_SUPPLIER_INVOICES"}
                            columns={mainTableColumns}
                            rowKey="invoice_id"
                            onClick={handleSelectedRow}
                            height="unset"
                            hideTools={false}
                            canDelete
                            useFloatingLabelsTotalCells
                        />
                    </Flex>
                    <Flex width="50%" flexDirection="column">
                        <TableWithApi
                            ref={detailTableRef}
                            api="QUERY_INVOICE_DETAIL_TABLE_DATA"
                            postApi="POST_INVOICE_DETAIL_TABLE_DATA"
                            columns={detailTableColumns}
                            rowKey="row_key"
                            hideTools={false}
                            canPrint={true}
                            canAdd
                            canEdit
                            canDelete
                            ModalContent={ModalView}
                            modalWidth="80%"
                            reportName={state.invoice_type === "C" ? "customer" : "supplier" }
                            printProps={{
                                invoice_id:invoiceNo
                            }}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default memo(InvoicesSearch)