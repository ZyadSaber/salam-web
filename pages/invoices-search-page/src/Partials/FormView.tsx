import React, { memo } from "react";
import RadioBox from "@commons/radio-box";
import { RadioBoxOptions } from "../constant";
import { SelectWithApi } from "@commons/select";
import { InputText } from "@commons/input-text";
import Flex from "@commons/flex";
import { SearchButton } from "@commons/button"

const FormView = ({ onChange, state, runQuery }: any) => {
    return (
        <>
            <Flex bordered width="100%" wrap>
                <RadioBox
                    name="invoice_type"
                    options={RadioBoxOptions}
                    value={state.invoice_type}
                    onChange={onChange}
                    Label="invctyp"
                    width="17%"
                />
                <InputText
                    name="invoice_no"
                    Label="no"
                    onChange={onChange}
                    type="number"
                    value={state.invoice_no}
                />
                <SelectWithApi
                    name="person_id"
                    Api="QUERY_CUSTOMER_AND_SUPPLIER_LIST"
                    Label="nm"
                    params={{
                        invoice_type: state.invoice_type
                    }}
                    value={state.name}
                    fetchOnFirstRun
                    onChange={onChange}
                />
                <InputText
                    name="date_from"
                    value={state.date_from}
                    Label="dtfrm"
                    onChange={onChange}
                    type="date"
                />
                <InputText
                    name="date_to"
                    value={state.date_to}
                    Label="dto"
                    onChange={onChange}
                    type="date"
                />
            </Flex>
            <SearchButton
                onClick={runQuery}
            />
        </>
    )
}

export default memo(FormView)