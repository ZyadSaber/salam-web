import React, { memo, useCallback } from "react";
import Flex from "@commons/flex";
import { TableWithApi, useCreateTableActionRef } from "@commons/table";
import { useFormManager } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import {InputText} from "@commons/input-text"
import ModalView from "./Partials/ModalView";
import { columns } from "./constants";

const EmployeesData = () => {
  const { state:{name}, onChange } = useFormManager({
    initialValues: {
      name: ""
    },
  });

  const { tableRef, fetchTableData } = useCreateTableActionRef();

  const handleSearch = useCallback(() => {
    fetchTableData({
        name
    });
  }, [fetchTableData, name]);

  return (
    <>
      <Flex bordered width="100%" wrap gap="5px" align="center">
        <InputText label="nm" name="name" onChange={onChange} value={name} />
        <SearchAndClearButton onSearch={handleSearch} noClear />
      </Flex>

      <TableWithApi
        ref={tableRef}
        api={"QUERY_EMPLOYEES_TABLE_DATA"}
        postApi={"POST_EMPLOYEES_TABLE_DATA"}
        columns={columns}
        hideTools={false}
        canEdit={true}
        canAdd={true}
        canDelete={true}
        rowKey={"employee_id"}
        ModalContent={ModalView}
        fetchOnFirstRun
      />
    </>
  );
};

export default memo(EmployeesData);
