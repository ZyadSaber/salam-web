import React, { memo, useCallback } from "react";
import ModalView from "./Partials/ModalView";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import Flex from "@commons/flex";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import { columns } from "./constant";

const ExpensesType = () => {
  const {
    state: { expense_type_name, expense_type_note },
    onChange,
  } = useFormManager({
    initialValues: {
        expense_type_name: "",
        expense_type_note: ""
    },
  });

  const { tableRef, fetchTableData } = useCreateTableActionRef();

  const handleSearch = useCallback(() => {
    fetchTableData({
      expense_type_name,
      expense_type_note,
    });
  }, [expense_type_name, expense_type_note, fetchTableData]);

  return (
    <>
      <Flex width="100%" wrap bordered gap="5px">
        <InputText
          width="15%"
          name="expense_type_name"
          value={expense_type_name}
          label="expnsnm"
          onChange={onChange}
        />
        <InputText
          width="15%"
          name="expense_type_note"
          value={expense_type_note}
          label="nts"
          onChange={onChange}
        />
        <SearchAndClearButton noClear onSearch={handleSearch} />
      </Flex>
      <TableWithApi
        ref={tableRef}
        api={"QUERY_EXPENSES_TYPES_TABLE_DATA"}
        postApi={"POST_EXPENSES_TYPES_TABLE_DATA"}
        columns={columns}
        hideTools={false}
        canEdit={true}
        canAdd={true}
        canDelete={true}
        rowKey={"expense_type_id"}
        ModalContent={ModalView}
        fetchOnFirstRun
        canExcel
      />
    </>
  );
};

export default memo(ExpensesType);
