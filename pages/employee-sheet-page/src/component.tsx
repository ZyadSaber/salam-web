import React, { memo } from "react";
import { Table } from "@commons/table";
import { SelectWithApi, YearSelect, MonthSelect } from "@commons/select";
import Flex from "@commons/flex";
import { useFormManager } from "@commons/hooks";
import { columns } from "./constans";
import { useFetch } from "@commons/hooks"
import { SearchAndClearButton } from "@commons/button";
import { InputText } from "@commons/input-text";

const EmployeeSheet = () => {
    const { state, onChange } = useFormManager({ initialValues: { employee_id: "", } })
    const { data, runFetch } = useFetch({
        link: "QUERY_EMPLOYEE_SHEET_SALARY",
        params: {
            employee_id: state.employee_id,
            year: state.year,
            month: state.month
        }
    })
    return (
        <>
            <Flex flexDirection="column" padding="0" margin="0" width="100%">
                <Flex width="100%" margin="0" padding="0" bordered>
                    <SelectWithApi
                        api="QUERY_EMPLOYEE_NAME_LIST"
                        name="employee_id"
                        label="emply"
                        onChange={onChange}
                        fetchOnFirstRun
                        value={state.employee_id}
                    />
                    <MonthSelect
                        name="month"
                        label="mnth"
                        onChange={onChange}
                        value={state.month}
                    />
                    <YearSelect
                        name="year"
                        label="yr"
                        onChange={onChange}
                        value={state.year}
                        width="15%"
                        range={4}
                    />
                    <SearchAndClearButton
                        onClick={runFetch}
                    />
                </Flex>
                <Table
                    dataSource={data?.late_cost}
                    columns={columns}
                    hideTools={false}
                    canPrint={true}
                // onPrint
                />
                <Flex width="100%" margin="0" padding="0" justifyContent="space-around">
                    <InputText
                        value={data?.salary}
                        label="slry"
                        disabled
                    />
                    <InputText
                        value={data?.total_late_time}
                        label="tltm"
                        disabled
                    />
                    <InputText
                        value={data?.total_over_time}
                        label="tlvrtm"
                        disabled
                    />
                    <InputText
                        value={data?.total_early_leaving}
                        label="tlrlylvng"
                        disabled
                    />
                    <InputText
                        value={data?.late_cost}
                        label="ltcs"
                        disabled
                    />
                    <InputText
                        value={data?.over_time_cost}
                        label="ovrtmcst"
                        disabled
                    />
                    <InputText
                        value={data?.net_data?.salary}
                        label="ntslry"
                        disabled
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default memo(EmployeeSheet)