import React, { memo } from "react";
import Flex from "@commons/flex";
import InputText from "@commons/input-text/src/inputText";
import { SelectWithApi } from "@commons/select";
import { ApiTable } from "@commons/table";
import { columns } from "./constant";
import { useFormManager } from "@commons/hooks";

const SupplierSummaryPage = () => {
    const { state, onChange } = useFormManager({ initialValue: { date_from: "", date_to: "", supplier_id: "" } })
    return (
        <>
            <Flex width="100%" flexDirection="column">
                <Flex width="100%" >
                    <SelectWithApi
                        Label="splr"
                        fetchOnFirstRun
                        name="supplier_id"
                        value={state.supplier_id}
                        onChange={onChange}
                        Api="QUERY_SUPPLIER_LIST"
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
                <ApiTable
                    api={""}
                    columns={columns}
                    hideTools={true}
                    rowKey={"rowKey"}
                    params={{
                        supplier_id: state.supplier_id,
                        date_from: state.date_from,
                        date_to: state.date_to
                    }}
                    fetchOnFirstRun
                />
            </Flex>
        </>
    )
}

export default memo(SupplierSummaryPage)