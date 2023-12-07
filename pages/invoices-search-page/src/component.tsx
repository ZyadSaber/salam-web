import React, { memo, useCallback, useState } from "react";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import Flex from "@commons/flex";
import { useFormManager, useModalVisibility } from "@commons/hooks";
import FormView from "./Partials/FormView";
import ModalView from "./Partials/ModalView";
import {
  mainTableColumns,
  detailTableColumns,
  initialFormValues,
} from "./constant";

const InvoicesSearch = () => {
  const [{invoice_id, invoice_type}, setSelectedRow] = useState({
    invoice_id: 0,
    invoice_type: ""
  });
  const [selectedDetailRow, setSelectedDetailRow] = useState({});
  const { visible, handleClose, handleOpen } = useModalVisibility();
  const { tableRef, fetchTableData } = useCreateTableActionRef();
  const { tableRef: detailTableRef, fetchTableData: fetchDetailTableData } =
    useCreateTableActionRef();

  //TODO: change that type to invoice_type
  const handleSelectedRow = useCallback(
    ({invoice_type, invoice_id}: any) => {
      fetchDetailTableData({
        invoice_type,
        invoice_no: invoice_id,
      });
      setSelectedRow({
        invoice_type,
        invoice_id,
      });
    },
    [fetchDetailTableData]
  );

  const { state, onChange } = useFormManager({
    initialValues: initialFormValues,
  });

  const handleAdd = useCallback(() => {
    setSelectedDetailRow({ query_status: "n" });
    handleOpen();
  }, [handleOpen]);
  const handleEdit = useCallback(() => {
    setSelectedDetailRow({ ...selectedDetailRow, query_status: "u" });
    handleOpen();
  }, [handleOpen, selectedDetailRow]);

  return (
    <>
      <Flex width="100%" margin="0" padding="0" flexDirection="column">
        <FormView
          fetchTableData={fetchTableData}
          state={state}
          onChange={onChange}
        />
        <Flex
          width="100%"
          margin="0"
          padding="0"
          justifyContent="space-between"
        >
          <Flex width="49%" flexDirection="column">
            <TableWithApi
              ref={tableRef}
              api="QUERY_INVOICE_MASTER_TABLE_DATA"
              postApi={
                state.invoice_type === "C"
                  ? "POST_CUSTOMER_INVOICES"
                  : "POST_SUPPLIER_INVOICES"
              }
              columns={mainTableColumns}
              rowKey="invoice_id"
              onClick={handleSelectedRow}
              height="unset"
              hideTools={false}
              canDelete
              useFloatingLabelsTotalCells
              fetchOnFirstRun
            />
          </Flex>
          <Flex width="50%" flexDirection="column">
            <TableWithApi
              ref={detailTableRef}
              api="QUERY_INVOICE_DETAIL_TABLE_DATA"
              columns={detailTableColumns}
              rowKey="row_key"
              hideTools={!invoice_id}
              canPrint={true}
              onAdd={handleAdd}
              onEdit={handleEdit}
              canAdd
              canEdit
              // canDelete
              modalWidth="80%"
              onSelectedRow={setSelectedDetailRow}
              reportName={state.invoice_type === "C" ? "customer" : "supplier"}
              printProps={{
                invoice_id,
              }}
            />
          </Flex>
        </Flex>
      </Flex>
      {visible && (
        <ModalView
          onClose={handleClose}
          visible={visible}
          selectedRow={selectedDetailRow}
          refreshTable={fetchDetailTableData}
          invoiceType={invoice_type}
          invoice_id={invoice_id}
        />
      )}
    </>
  );
};

export default memo(InvoicesSearch);
