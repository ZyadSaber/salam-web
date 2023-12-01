import React, { memo, useCallback } from "react";
import ModalView from "./Partials/ModalView";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import Flex from "@commons/flex";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import { columns } from "./constants";

const Items = () => {
  const {
    state: { item_name, item_unit, item_description },
    onChange,
  } = useFormManager({
    initialValues: {
        item_name: "",
        item_unit: "",
        item_description: "",
    },
  });

  const { tableRef, fetchTableData } = useCreateTableActionRef();

  const handleSearch = useCallback(() => {
    fetchTableData({
        item_name,
        item_unit,
        item_description
    });
  }, [item_name, item_unit, item_description, fetchTableData]);
  return (
    <>
      <Flex width="100%" wrap bordered gap="5px">
        <InputText
          width="15%"
          name="item_name"
          value={item_name}
          label="itmnm"
          onChange={onChange}
        />
        <InputText
          width="15%"
          name="item_unit"
          value={item_unit}
          label="unt"
          onChange={onChange}
        />
        <InputText
          width="15%"
          name="item_description"
          value={item_description}
          label="nts"
          onChange={onChange}
        />
        <SearchAndClearButton noClear onSearch={handleSearch} />
      </Flex>
      <TableWithApi
        ref={tableRef}
        api={"QUERY_ITEMS_TABLE_DATA"}
        postApi={"POST_ITEMS_TABLE_DATA"}
        columns={columns}
        hideTools={false}
        canEdit={true}
        canAdd={true}
        canDelete={true}
        rowKey={"item_id"}
        ModalContent={ModalView}
        fetchOnFirstRun
        canExcel
      />
    </>
  );
};

export default memo(Items);
