import React, { memo, useCallback } from "react";
import ModalView from "./Partials/ModalView";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import Flex from "@commons/flex";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import { columns } from "./constants";

const Customers = () => {
  const {
    state: { customer_name, phone, address },
    onChange,
  } = useFormManager({
    initialValues: {
      customer_name: "",
      phone: "",
      address: ""
    },
  });

  const { tableRef, fetchTableData } = useCreateTableActionRef();

  const handleSearch = useCallback(() => {
    fetchTableData({
      customer_name,
      phone,
      address
    });
  }, [fetchTableData, customer_name, phone, address]);
  return (
    <>
      <Flex width="100%" wrap bordered gap="5px">
        <InputText
          width="15%"
          name="customer_name"
          value={customer_name}
          label="nm"
          onChange={onChange}
        />
        <InputText
          width="15%"
          name="phone"
          value={phone}
          label="phn"
          onChange={onChange}
        />
        <InputText
          width="15%"
          name="address"
          value={address}
          label="adrs"
          onChange={onChange}
        />
        <SearchAndClearButton noClear onSearch={handleSearch} />
      </Flex>
      <TableWithApi
        ref={tableRef}
        api={"QUERY_CUSTOMER_TABLE_DATA"}
        postApi={"POST_CUSTOMER_TABLE_DATA"}
        columns={columns}
        hideTools={false}
        canEdit={true}
        canAdd={true}
        canDelete={true}
        canExcel
        rowKey={"customer_id"}
        ModalContent={ModalView}
        fetchOnFirstRun
        modalWidth="40%"
      />
    </>
  );
};

export default memo(Customers);
