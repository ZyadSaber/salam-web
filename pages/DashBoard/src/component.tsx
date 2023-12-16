import React, { memo, useCallback, useState } from "react";
import { ChartWithApi } from "@commons/chart-js";
import Flex from "@commons/flex";
import { TableWithApi } from "@commons/table";
import InvoiceDetailsWithEditModal from "@components/invoice-details-with-edit-modal";
import { supplierTableColumns, customerTableColumns } from "./constants";

const DashBoard = () => {
  const [{ invoiceType, invoiceNumber, visible }, setModalProp] = useState({
    invoiceType: "",
    invoiceNumber: 0,
    visible: false,
  });

  const handleClose = useCallback(() => {
    setModalProp({
      invoiceType: "",
      invoiceNumber: 0,
      visible: false,
    });
  }, []);

  const handleCustomerModal = useCallback((e: any) => {
    setModalProp({
      invoiceType: "C",
      invoiceNumber: e.customer_invoice_id,
      visible: true,
    });
  }, []);

  const handleSupplierModal = useCallback((e: any) => {
    setModalProp({
      invoiceType: "S",
      invoiceNumber: e.supplier_invoice_id,
      visible: true,
    });
  }, []);

  return (
    <>
      <Flex width="100%" gap="10px" wrap>
        <Flex width="75%" flexDirection="column">
          <TableWithApi
            api="QUERY_CUSTOMERS_INVOICES_FOR_TODAY"
            rowKey="customer_invoice_id"
            columns={customerTableColumns}
            fetchOnFirstRun
            label="cstmrs"
            fixedHeight="300px"
            onDoubleClick={handleCustomerModal}
            noPagination
          />
          <TableWithApi
            api="QUERY_SUPPLIERS_INVOICES_FOR_TODAY"
            rowKey="supplier_invoice_id"
            columns={supplierTableColumns}
            fetchOnFirstRun
            fixedHeight="300px"
            label="splrs"
            onDoubleClick={handleSupplierModal}
            noPagination
          />
        </Flex>
        <Flex width="24%" flexDirection="column">
          <ChartWithApi
            api="QUERY_INVOICES_CHART_DATA"
            label="invcs"
            mode="pie"
            width="90%"
          />
          {/* <ChartWithApi
                        api="QUERY_VAULT_CHART_DATA"
                        label="vault"
                        mode="pie"
                        width="90%"
                    /> */}
        </Flex>
      </Flex>
      <InvoiceDetailsWithEditModal
        invoiceType={invoiceType}
        invoiceNumber={invoiceNumber}
        visible={visible}
        onClose={handleClose}
        withEdit={false}
      />
    </>
  );
};

export default memo(DashBoard);
