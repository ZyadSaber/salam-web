import React, { memo, useEffect } from "react";
import { SelectWithApi } from "@commons/select";
import { InputText } from "@commons/input-text";
import Flex from "@commons/flex";
import InputNumber from "@commons/input-number"

interface InsertFormProp {
    onChange: any;
    state: any;
    handleRootState: any;
    handleSelectWithLabelChange: any
}

const InsertForm = ({
    onChange,
    state,
    handleRootState,
    handleSelectWithLabelChange
}: InsertFormProp) => {

    useEffect(() => {
        handleRootState({
            ...state,
            customer_invoice_item_size: +state.customer_invoice_item_width * +state.customer_invoice_item_height,
            customer_invoice_item_total: +state.customer_invoice_item_quantity * +state.customer_invoice_item_price * +state.customer_invoice_item_width * +state.customer_invoice_item_height
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        state.customer_invoice_item_width,
        state.customer_invoice_item_height,
        state.customer_invoice_item_quantity,
        state.customer_invoice_item_price
    ])

    return (
        <>
            <Flex width="100%" flexDirection="column" margin="0" padding="0">
                <Flex margin="0" padding="0">
                    <SelectWithApi
                        Api={"QUERY_PRINT_OPTIONS_LIST"}
                        onChange={handleSelectWithLabelChange}
                        value={state.customer_invoice_print_option_id}
                        Label="prntnm"
                        name="customer_invoice_print_option_id"
                        withLabel
                        fetchOnFirstRun
                        selectLabelName="print_name"
                    />
                    <SelectWithApi
                        Api={"QUERY_ITEMS_LIST"}
                        onChange={handleSelectWithLabelChange}
                        value={state.customer_invoice_item_id}
                        Label="itmnm"
                        name="customer_invoice_item_id"
                        withLabel
                        fetchOnFirstRun
                        selectLabelName="item_name"
                    />
                </Flex>
                <Flex margin="0" padding="0">
                    <InputNumber
                        name="customer_invoice_item_width"
                        value={state.customer_invoice_item_width}
                        Label="wdth"
                        onChange={onChange}
                        width="14%"
                    />
                    <InputNumber
                        name="customer_invoice_item_height"
                        value={state.customer_invoice_item_height}
                        Label="hght"
                        onChange={onChange}
                        width="14%"
                    />
                    <InputNumber
                        name="customer_invoice_item_size"
                        value={state.customer_invoice_item_size}
                        Label="sz"
                        onChange={onChange}
                        disabled
                        width="14%"
                    />
                    <InputNumber
                        name="customer_invoice_item_quantity"
                        value={state.customer_invoice_item_quantity}
                        Label="qnty"
                        onChange={onChange}
                        width="14%"
                    />
                    <InputNumber
                        name="customer_invoice_item_price"
                        value={state.customer_invoice_item_price}
                        Label="prc"
                        onChange={onChange}
                        width="14%"
                    />
                    <InputNumber
                        name="customer_invoice_item_total"
                        value={state.customer_invoice_item_total}
                        Label="total"
                        onChange={onChange}
                        disabled
                        width="14%"
                    />
                    <InputText
                        name="customer_invoice_item_notes"
                        value={state.customer_invoice_item_notes}
                        Label="nts"
                        onChange={onChange}
                        width="14%"
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default memo(InsertForm)