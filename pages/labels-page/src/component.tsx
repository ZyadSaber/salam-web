import React, { memo, useCallback } from "react";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import Flex from "@commons/flex";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import ModalView from "./Partials/ModalView";
import { columns } from "./constant";

const LabelsPage = () => {
  const {
    state: { english_name, arabic_name },
    onChange,
  } = useFormManager({
    initialValues: {
      english_name: "",
      arabic_name: "",
    },
  });

  const { tableRef, fetchTableData } = useCreateTableActionRef();

  const handleSearch = useCallback(() => {
    fetchTableData({
      english_name,
      arabic_name,
    });
  }, [fetchTableData, english_name, arabic_name]);

  return (
    <>
      <Flex width="100%" wrap bordered gap="5px" align="center">
        <InputText
          label="englshnm"
          width="15%"
          name="english_name"
          value={english_name}
          onChange={onChange}
        />
        <InputText
          label="arbcnm"
          name="arabic_name"
          value={arabic_name}
          width="15%"
          onChange={onChange}
        />
        <SearchAndClearButton noClear onSearch={handleSearch} />
      </Flex>

      <TableWithApi
        ref={tableRef}
        api={"QUERY_LABELS_TABLE_DATA"}
        postApi={"POST_LABELS_TABLE_DATA"}
        columns={columns}
        hideTools={false}
        canEdit
        canAdd
        canDelete
        canExcel
        height="500px"
        rowKey="language_code"
        ModalContent={ModalView}
        fetchOnFirstRun
      />
    </>
  );
};

export default memo(LabelsPage);
