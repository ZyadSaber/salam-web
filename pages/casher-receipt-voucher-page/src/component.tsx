import React, { memo, useCallback } from "react";
import Flex from "@commons/flex";
import DatePicker from "@commons/date-picker";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import { useFormManager } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import ModalView from "./Partials/modalView";
import { columns } from "./constant";

const CasherReceiptVoucher = () => {
  const { state, onChange } = useFormManager({
    initialValues: { date_from: "", date_to: "" },
  });

  const { tableRef, fetchTableData } = useCreateTableActionRef();
  const handleSearch = useCallback(() => {
    fetchTableData({
      date_from: state.date_from,
      date_to: state.date_to,
    });
  }, [fetchTableData, state.date_from, state.date_to]);

  return (
    <>
      <Flex width="100%" wrap align="center" gap="5px">
        <DatePicker name="date_from" label="frm" onChange={onChange} />
        <DatePicker name="date_to" label="to" onChange={onChange} />
        <SearchAndClearButton noClear onSearch={handleSearch} />
      </Flex>

      <TableWithApi
        ref={tableRef}
        api={"QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA"}
        postApi={"POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA"}
        columns={columns}
        hideTools={false}
        canEdit={true}
        canAdd={true}
        canDelete={true}
        rowKey={"voucher_id"}
        ModalContent={ModalView}
        fetchOnFirstRun
      />
    </>
  );
};

export default memo(CasherReceiptVoucher);
