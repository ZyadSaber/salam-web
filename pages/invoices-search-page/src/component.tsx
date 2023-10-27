import React, { memo, useCallback } from "react";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import Flex from "@commons/flex";
import PdfViewer from "@commons/pdf-viewer";
import {usePdfViewerControl} from "@commons/pdf-viewer";
import FormView from "./Partials/FormView";
import ModalView from "./Partials/ModalView";
import { mainTableColumns, detailTableColumns } from "./constant";

const InvoicesSearch = () => {
    const {
        tableRef,
        fetchTableData,
    } = useCreateTableActionRef()
    const {
        tableRef: detailTableRef,
        fetchTableData: fetchDetailTableData,
    } = useCreateTableActionRef()

    const {PDFRef, handleOpenModal} = usePdfViewerControl()

    //TODO: change that type to invoice_type
    const handleSelectedRow = useCallback((e: any) => {
        fetchDetailTableData({
            invoice_type: e.invoice_type,
            invoice_no: e.invoice_id
        })
    }, [fetchDetailTableData])

    return (
        <>
            <Flex width="100%" margin="0" padding="0" flexDirection="column">
                <FormView
                    fetchTableData={fetchTableData}
                />
                <Flex width="100%" margin="0" padding="0" justifyContent="space-between">
                    <Flex width="40%">
                        <TableWithApi
                            ref={tableRef}
                            api="QUERY_INVOICE_MASTER_TABLE_DATA"
                            postApi="POST_INVOICE_MASTER_TABLE_DATA"
                            columns={mainTableColumns}
                            rowKey="invoice_id"
                            onSelectedRow={handleSelectedRow}
                            height="400px"
                            hideTools={false}
                            canDelete
                        />
                    </Flex>
                    <Flex width="60%">
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
                            onPrint={handleOpenModal}
                            ModalContent={ModalView}
                            modalWidth="80%"
                        />
                    </Flex>
                </Flex>
            <PdfViewer
                ref={PDFRef}
                reportName="files"
                params={{
                    invoice_id: 17,
                    type: "C"
                }}
            />
            </Flex>
        </>
    )
}

export default memo(InvoicesSearch)