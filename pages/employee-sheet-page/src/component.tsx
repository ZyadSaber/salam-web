import React, { memo } from "react";
import { Table } from "@commons/table";
import { SelectWithApi, YearSelect, MonthSelect } from "@commons/select";
import Flex from "@commons/flex";
import { useFormManager } from "@commons/hooks";
import { columns } from "./constans";
import { useFetch } from "@commons/hooks"
import { SearchButton } from "@commons/button";
import { InputText } from "@commons/input-text";

const EmployeeSheet = () => {
    const { state, onChange } = useFormManager({ initialValue: { employee_id: "", } })
    const { data, runFetch } = useFetch({
        link: "QUERY_EMPLOYEE_SHEET_SALARY",
        params: {
            employee_id: state.employee_id,
            year: state.year,
            month: state.month
        }
    })
    const {
        daysData,
        total_late_time,
        total_over_time,
        total_early_leaving,
        net_salary,
        salary,
        late_cost,
        over_time_cost,
    } = data
    return (
        <>
            <Flex flexDirection="column" padding="0" margin="0" width="100%">
                <Flex width="100%" margin="0" padding="0" bordered>
                    <SelectWithApi
                        Api="QUERY_EMPLOYEE_NAME_LIST"
                        name="employee_id"
                        Label="emply"
                        onChange={onChange}
                        fetchOnFirstRun
                        value={state.employee_id}
                    />
                    <MonthSelect
                        name="month"
                        Label="mnth"
                        onChange={onChange}
                        value={state.month}
                    />
                    <YearSelect
                        name="year"
                        Label="yr"
                        onChange={onChange}
                        value={state.year}
                        width="15%"
                        range={4}
                    />
                    <SearchButton
                        onClick={runFetch}
                    />
                </Flex>
                <Table
                    dataSource={daysData}
                    columns={columns}
                    hideTools={false}
                    canPrint={true}
                // onPrint
                />
                <Flex width="100%" margin="0" padding="0" justifyContent="space-around">
                    <InputText
                        value={salary}
                        Label="slry"
                        disabled
                    />
                    <InputText
                        value={total_late_time}
                        Label="tltm"
                        disabled
                    />
                    <InputText
                        value={total_over_time}
                        Label="tlvrtm"
                        disabled
                    />
                    <InputText
                        value={total_early_leaving}
                        Label="tlrlylvng"
                        disabled
                    />
                    <InputText
                        value={late_cost}
                        Label="ltcs"
                        disabled
                    />
                    <InputText
                        value={over_time_cost}
                        Label="ovrtmcst"
                        disabled
                    />
                    <InputText
                        value={net_salary}
                        Label="ntslry"
                        disabled
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default memo(EmployeeSheet)