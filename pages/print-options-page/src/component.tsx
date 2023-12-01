import React, { memo, useCallback } from "react";
import ModalView from "./Partials/ModalView";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import Flex from "@commons/flex";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import { columns } from "./constants";

const PrintOptions = () => {
  const {
    state: { print_option_name, print_option_note },
    onChange,
  } = useFormManager({
    initialValues: {
      print_option_name: "",
      print_option_note: "",
    },
  });

  const { tableRef, fetchTableData } = useCreateTableActionRef();

  const handleSearch = useCallback(() => {
    fetchTableData({
      print_option_name,
      print_option_note,
    });
  }, [print_option_name, print_option_note, fetchTableData]);
  return (
    <>
      <Flex width="100%" wrap bordered gap="5px">
        <InputText
          width="15%"
          name="print_option_name"
          value={print_option_name}
          label="prntnm"
          onChange={onChange}
        />
        <InputText
          width="15%"
          name="print_option_note"
          value={print_option_note}
          label="nts"
          onChange={onChange}
        />
        <SearchAndClearButton noClear onSearch={handleSearch} />
      </Flex>
      
      <TableWithApi
        ref={tableRef}
        api={"QUERY_PRINT_OPTIONS_TABLE_DAT"}
        postApi={"POST_PRINT_OPTIONS_TABLE_DATA"}
        columns={columns}
        hideTools={false}
        canEdit={true}
        canAdd={true}
        canDelete={true}
        rowKey={"print_option_id"}
        ModalContent={ModalView}
        fetchOnFirstRun
        canExcel
      />
    </>
  );
};

export default memo(PrintOptions);
