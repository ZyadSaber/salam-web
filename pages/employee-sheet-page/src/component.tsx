import React, { memo, useCallback } from "react";
import { Table } from "@commons/table";
import { SelectWithApi, YearSelect, MonthSelect } from "@commons/select";
import Flex from "@commons/flex";
import { useFormManager } from "@commons/hooks";
import { columns } from "./constans";
import { useFetch } from "@commons/hooks";
import { SearchAndClearButton } from "@commons/button";
import { InputText } from "@commons/input-text";

const EmployeeSheet = () => {
  const { state, onChange } = useFormManager({
    initialValues: { employee_id: "" },
  });
  const { data, runFetch, loading } = useFetch({
    link: "QUERY_EMPLOYEE_SHEET_SALARY",
    checkForParams: false,
  });

  const handleSearch = useCallback(() => {
    runFetch();
  }, [runFetch]);

  return (
    <>
      <Flex width="100%" gap="5px" wrap align="center" margin="0" padding="0">
        <SelectWithApi
          api="QUERY_EMPLOYEE_NAME_LIST"
          name="employee_id"
          label="emply"
          onChange={onChange}
          fetchOnFirstRun
          value={state.employee_id}
          width="15%"
        />
        <MonthSelect
          name="month"
          label="mnth"
          onChange={onChange}
          value={state.month}
          width="15%"
        />
        <YearSelect
          name="year"
          label="yr"
          onChange={onChange}
          value={state.year}
          width="15%"
          range={4}
        />
        <SearchAndClearButton onSearch={handleSearch} noClear />
      </Flex>

      <Table
        dataSource={data?.late_cost}
        columns={columns}
        hideTools={false}
        canPrint={true}
        loading={loading}
      />

      <Flex width="100%" gap="10px" wrap>
        <InputText value={data?.salary} label="slry" disabled width="13.5%" />
        <InputText
          value={data?.total_late_time}
          label="tltm"
          disabled
          width="13.5%"
        />
        <InputText
          value={data?.total_over_time}
          label="tlvrtm"
          disabled
          width="13.5%"
        />
        <InputText
          value={data?.total_early_leaving}
          label="tlrlylvng"
          disabled
          width="13.5%"
        />
        <InputText
          value={data?.late_cost}
          label="ltcs"
          disabled
          width="13.5%"
        />
        <InputText
          value={data?.over_time_cost}
          label="ovrtmcst"
          disabled
          width="13.5%"
        />
        <InputText
          value={data?.net_data?.salary}
          label="ntslry"
          disabled
          width="13.5%"
        />
      </Flex>
    </>
  );
};

export default memo(EmployeeSheet);
