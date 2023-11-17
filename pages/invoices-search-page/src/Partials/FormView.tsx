import React, { memo, useCallback } from "react";
import RadioBox from "@commons/radio-box";
import { RadioBoxOptions } from "../constant";
import { SelectWithApi } from "@commons/select";
import InputNumber from "@commons/input-number";
import Flex from "@commons/flex";
import DatePicker from "@commons/date-picker";
import { Button } from "@commons/button"

//TODO: add this type
const FormView = ({ fetchTableData, state, onChange }: any) => {

    const handleSearch = useCallback(() => {
        fetchTableData({
            invoice_type: state.invoice_type,
            invoice_no: state.invoice_no,
            holder_number: state.holder_number,
        })
    }, [fetchTableData, state.holder_number, state.invoice_no, state.invoice_type])

    return (
        <>
            <Flex bordered width="100%" wrap gap="5px">
                <RadioBox
                    name="invoice_type"
                    options={RadioBoxOptions}
                    value={state.invoice_type}
                    onChange={onChange}
                    label="invctyp"
                    width="auto"
                />
                <InputNumber
                    name="invoice_no"
                    label="no"
                    onChange={onChange}
                    value={state.invoice_no}
                />
                <SelectWithApi
                    name="holder_number"
                    api="QUERY_CUSTOMER_AND_SUPPLIER_LIST"
                    label="nm"
                    params={{
                        invoice_type: state.invoice_type
                    }}
                    value={state.holder_number}
                    fetchOnFirstRun
                    onChange={onChange}
                />
                <DatePicker
                    name="date_from"
                    value={state.date_from}
                    label="dtfrm"
                    onChange={onChange}
                />
                <DatePicker
                    name="date_to"
                    value={state.date_to}
                    label="dto"
                    onChange={onChange}
                />
                <Button
                    onClick={handleSearch}
                    label="Search"
                />
            </Flex>
        </>
    )
}

export default memo(FormView)