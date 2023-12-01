import React, { memo, useCallback } from "react";
import Flex from "@commons/flex";
import DatePicker from "@commons/date-picker";
import { SelectWithApi } from "@commons/select";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import { useFormManager } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import { columns } from "./constant";

const CustomersSummaryPage = () => {
  const {
    state: { customer_id, date_from, date_to },
    onChange,
  } = useFormManager({
    initialValues: { date_from: "", date_to: "", customer_id: "" },
  });
  const { tableRef, fetchTableData } = useCreateTableActionRef();

  const handleSearch = useCallback(() => {
    fetchTableData({
      customer_id,
      date_from,
      date_to,
    });
  }, [customer_id, date_from, date_to, fetchTableData]);
  return (
    <>
      <Flex bordered width="100%" wrap gap="5px" align="center">
        <SelectWithApi
          label="cstmr"
          fetchOnFirstRun
          name="customer_id"
          value={customer_id}
          onChange={onChange}
          api="QUERY_CUSTOMERS_LIST"
        />
        <DatePicker
          name="date_from"
          label="frm"
          onChange={onChange}
          value={date_from}
        />
        <DatePicker
          name="date_to"
          label="to"
          onChange={onChange}
          value={date_to}
        />
        <SearchAndClearButton onSearch={handleSearch} noClear />
      </Flex>

      <TableWithApi
        ref={tableRef}
        api={"QUERY_CUSTOMER_SUMMARY_TABLE"}
        columns={columns}
        rowKey={"rowKey"}
        hideTools={false}
        canExcel
      />
    </>
  );
};

export default memo(CustomersSummaryPage);
