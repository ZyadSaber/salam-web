import React, { memo, useCallback } from "react";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import Flex from "@commons/flex";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import { CheckBox } from "@commons/check-box";
import { SelectWithApi } from "@commons/select";
import ModalView from "./Partials/ModalView";
import { columns } from "./constants";

const PageName = () => {
  const {
    state: {
      page_name,
      page_link,
      page_parent_id,
      page_disabled,
      run_in_modal,
    },
    onChange,
  } = useFormManager({
    initialValues: {
      page_name: "",
      page_link: "",
      page_parent_id: "",
      page_disabled: "N",
      run_in_modal: "N",
    },
  });

  const { tableRef, fetchTableData } = useCreateTableActionRef();

  const handleSearch = useCallback(() => {
    fetchTableData({
      page_name,
      page_link,
      page_parent_id,
      page_disabled,
      run_in_modal,
    });
  }, [
    fetchTableData,
    page_name,
    page_link,
    page_parent_id,
    page_disabled,
    run_in_modal,
  ]);

  return (
    <>
      <Flex width="100%" wrap bordered gap="5px" align="center">
        <InputText
          width="15%"
          name="page_name"
          value={page_name}
          label="nm"
          onChange={onChange}
        />
        <InputText
          label="pglnk"
          name="page_link"
          value={page_link}
          width="15%"
          onChange={onChange}
        />
        <SelectWithApi
          api="QUERY_PAGE_PARENT_LIST"
          label="prntnm"
          name="page_parent_id"
          onChange={onChange}
          value={page_parent_id}
          width="15%"
          fetchOnFirstRun
        />
        <CheckBox
          name="page_disabled"
          label="pgdsbld"
          onChange={onChange}
          value={page_disabled}
        />
        <CheckBox
          name="run_in_modal"
          label="rninmdl"
          onChange={onChange}
          value={run_in_modal}
        />
        <SearchAndClearButton noClear onSearch={handleSearch} />
      </Flex>

      <TableWithApi
        ref={tableRef}
        api={"QUERY_PAGE_NAME_MAIN_TABLE"}
        postApi={"POST_PAGE_NAME_MAIN_TABLE"}
        columns={columns}
        hideTools={false}
        canEdit={true}
        canAdd={true}
        canDelete={true}
        canExcel
        rowKey={"page_id"}
        ModalContent={ModalView}
        fetchOnFirstRun
        height="400px"
      />
    </>
  );
};

export default memo(PageName);
