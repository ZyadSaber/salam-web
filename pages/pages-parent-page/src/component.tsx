import React, { memo, useCallback } from "react";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import Flex from "@commons/flex";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import { CheckBox } from "@commons/check-box";
import ModalView from "./Partials/ModalView";
import { columns } from "./constants";

const PagesParent = () => {
  const {
    state: { page_parent_name, hidden },
    onChange,
  } = useFormManager({
    initialValues: {
      page_parent_name: "",
      hidden: "N",
    },
  });

  const { tableRef, fetchTableData } = useCreateTableActionRef();

  const handleSearch = useCallback(() => {
    fetchTableData({
      page_parent_name,
      hidden,
    });
  }, [fetchTableData, page_parent_name, hidden]);

  return (
    <>
      <Flex width="100%" wrap bordered gap="5px" align="center">
        <InputText
          width="15%"
          name="page_parent_name"
          value={page_parent_name}
          label="nm"
          onChange={onChange}
        />
        <CheckBox
          name="hidden"
          label="hdn"
          onChange={onChange}
          value={hidden}
        />
        <SearchAndClearButton noClear onSearch={handleSearch} />
      </Flex>

      <TableWithApi
        ref={tableRef}
        api={"QUERY_PAGES_PARENT_DATA_TABLE"}
        postApi={"POST_PAGES_PARENT_DATA_TABLE"}
        columns={columns}
        hideTools={false}
        canEdit={true}
        canAdd={true}
        canDelete={true}
        canExcel={false}
        rowKey={"page_parent_id"}
        ModalContent={ModalView}
        fetchOnFirstRun
      />
    </>
  );
};

export default memo(PagesParent);
