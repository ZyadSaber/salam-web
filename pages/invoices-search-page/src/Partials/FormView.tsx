import React, { memo, useCallback } from "react";
import RadioBox from "@commons/radio-box";
import { RadioBoxOptions } from "../constant";
import { SelectWithApi } from "@commons/select";
import Flex from "@commons/flex";
import DatePicker from "@commons/date-picker";
import { SearchAndClearButton } from "@commons/button";
import {formViewProp} from "../interface"

//TODO: add this type
const FormView = ({ fetchTableData, state, onChange }: formViewProp) => {

    const handleSearch = useCallback(() => {
        fetchTableData(state)
    }, [fetchTableData, state])

    return (
        <>
            <Flex bordered width="100%" wrap gap="5px" align="center">
                <RadioBox
                    name="invoice_type"
                    options={RadioBoxOptions}
                    value={state.invoice_type}
                    onChange={onChange}
                    label="invctyp"
                    width="auto"
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
                    width="15%"
                />
                <DatePicker
                    name="date_from"
                    value={state.date_from}
                    label="dtfrm"
                    onChange={onChange}
                    width="15%"
                />
                <DatePicker
                    name="date_to"
                    value={state.date_to}
                    label="dto"
                    onChange={onChange}
                    width="15%"
                />
                <SearchAndClearButton noClear onSearch={handleSearch} />
            </Flex>
        </>
    )
}

export default memo(FormView)