import React, { memo, useCallback } from "react";
import Flex from "@commons/flex";
import { SelectWithApi } from "@commons/select";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import DatePicker from "@commons/date-picker";
import { useFormManager } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import { columns } from "./constant";

const SupplierSummaryPage = () => {
  const {
    state: { supplier_id, date_from, date_to },
    onChange,
  } = useFormManager({
    initialValues: {
      date_from: "",
      date_to: "",
      supplier_id: "",
    },
  });
  const { tableRef, fetchTableData } = useCreateTableActionRef();

  const handleSearch = useCallback(() => {
    fetchTableData({
      supplier_id,
      date_from,
      date_to
    });
  }, [date_from, date_to, fetchTableData, supplier_id]);
  return (
    <>
      <Flex width="100%" wrap bordered gap="5px" align="center">
        <SelectWithApi
          label="splr"
          fetchOnFirstRun
          name="supplier_id"
          value={supplier_id}
          onChange={onChange}
          api="QUERY_SUPPLIER_LIST"
        />
        <DatePicker
          name="date_from"
          value={date_from}
          label="frm"
          onChange={onChange}
        />
        <DatePicker
          name="date_to"
          value={date_to}
          label="to"
          onChange={onChange}
        />
        <SearchAndClearButton noClear onSearch={handleSearch} />
      </Flex>
      <TableWithApi
        ref={tableRef}
        api={"QUERY_SUPPLIER_SUMMARY_TABLE"}
        columns={columns}
        hideTools={false}
        canExcel
        rowKey={"rowKey"}
      />
    </>
  );
};

export default memo(SupplierSummaryPage);
