import React, { memo } from "react";
import Flex from "@commons/flex";
import InputText from "@commons/input-text/src/inputText";
import { SelectWithApi } from "@commons/select";
import { TableWithApi } from "@commons/table";
import { columns } from "./constant";
import { useFormManager } from "@commons/hooks";

const CustomersSummaryPage = () => {
    const { state, onChange } = useFormManager({ initialValues: { date_from: "", date_to: "", customer_id: "" } })
    return (
        <>
            <Flex width="100%" flexDirection="column">
                <Flex width="100%" >
                    <SelectWithApi
                        Label="cstmr"
                        fetchOnFirstRun
                        name="customer_id"
                        value={state.customer_id}
                        onChange={onChange}
                        Api="QUERY_CUSTOMERS_LIST"
                    />
                    <InputText
                        name="date_from"
                        type="date"
                        Label="frm"
                        onChange={onChange}
                    />
                    <InputText
                        name="date_to"
                        type="date"
                        Label="to"
                        onChange={onChange}
                    />
                </Flex>
                <TableWithApi
                    api={"QUERY_CUSTOMER_SUMMARY_TABLE"}
                    columns={columns}
                    rowKey={"rowKey"}
                    hideTools={false}
                    canExcel
                    params={{
                        customer_id: state.customer_id,
                        // date_from: state.date_from,
                        // date_to: state.date_to
                    }}
                    fetchOnFirstRun
                />
            </Flex>
        </>
    )
}

export default memo(CustomersSummaryPage)