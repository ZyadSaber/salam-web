import React, { memo } from "react";
import Flex from "@commons/flex";
import InputText from "@commons/input-text/src/inputText";
import { SelectWithApi } from "@commons/select";
import { ApiTable } from "@commons/table";
import { columns } from "./constant";
import { useFormManager } from "@commons/hooks";

const CustomersSummaryPage = () => {
    const { state, onChange } = useFormManager({ initialValue: { date_from: "", date_to: "", customer_id: "" } })
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
                        Label="from"
                        onChange={onChange}
                    />
                    <InputText
                        name="date_to"
                        type="date"
                        Label="to"
                        onChange={onChange}
                    />
                </Flex>
                <ApiTable
                    api={""}
                    columns={columns}
                    hideTools={true}
                    rowKey={"receipt_voucher_id"}
                    params={{
                        customer_id: state.customer_id,
                        date_from: state.date_from,
                        date_to: state.date_to
                    }}
                    fetchOnFirstRun
                />
            </Flex>
        </>
    )
}

export default memo(CustomersSummaryPage)