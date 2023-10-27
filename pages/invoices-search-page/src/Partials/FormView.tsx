import React, { memo, useCallback } from "react";
import RadioBox from "@commons/radio-box";
import { RadioBoxOptions } from "../constant";
import { SelectWithApi } from "@commons/select";
import { InputText } from "@commons/input-text";
import Flex from "@commons/flex";
import { useFormManager } from "@commons/hooks";
import { Button } from "@commons/button"
import { initialFormValues } from "../constant"

const FormView = ({ fetchTableData }: any) => {
    const {
        state
        , onChange
    } = useFormManager({
        initialValues: initialFormValues
    })

    const handleSearch = useCallback(() => {
        fetchTableData({
            invoice_type: state.invoice_type,
            invoice_no: state.invoice_no,
            holder_number: state.holder_number,
        })
    }, [fetchTableData, state.holder_number, state.invoice_no, state.invoice_type])

    return (
        <>
            <Flex bordered width="100%" wrap>
                <RadioBox
                    name="invoice_type"
                    options={RadioBoxOptions}
                    value={state.invoice_type}
                    onChange={onChange}
                    label="invctyp"
                    width="17%"
                />
                <InputText
                    name="invoice_no"
                    label="no"
                    onChange={onChange}
                    type="number"
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
                <InputText
                    name="date_from"
                    value={state.date_from}
                    label="dtfrm"
                    onChange={onChange}
                    type="date"
                />
                <InputText
                    name="date_to"
                    value={state.date_to}
                    label="dto"
                    onChange={onChange}
                    type="date"
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