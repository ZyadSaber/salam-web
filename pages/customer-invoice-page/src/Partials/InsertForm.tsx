import React, { memo, useCallback } from "react";
import { SelectWithApi } from "@commons/select";
import { InputText } from "@commons/input-text";
import Flex from "@commons/flex";
import InputNumber from "@commons/input-number";
import { onChangeType } from "@commons/global";

interface InsertFormProp {
    onChange: any;
    state: any;
    handleItemMultiInput: any;
    handleSelectWithLabelChange: any
}

const InsertForm = ({
    onChange,
    state,
    handleItemMultiInput,
    handleSelectWithLabelChange
}: InsertFormProp) => {

    const handleWidth = useCallback(({ name, value }: onChangeType) => {
        handleItemMultiInput({
            [name]: value,
            customer_invoice_item_size: +value * +state.customer_invoice_item_height,
        })
    }, [handleItemMultiInput, state.customer_invoice_item_height])
    const handleHeight = useCallback(({ name, value }: onChangeType) => {
        handleItemMultiInput({
            [name]: value,
            customer_invoice_item_size: +state.customer_invoice_item_width * +value
        })
    }, [handleItemMultiInput, state.customer_invoice_item_width])
    const handleQuantity = useCallback(({ name, value }: onChangeType) => {
        handleItemMultiInput({
            [name]: value,
            customer_invoice_item_total: +value * +state.customer_invoice_item_price * +state.customer_invoice_item_size
        })
    }, [handleItemMultiInput, state.customer_invoice_item_price, state.customer_invoice_item_size])
    const handlePrice = useCallback(({ name, value }: onChangeType) => {
        handleItemMultiInput({
            [name]: value,
            customer_invoice_item_total: +state.customer_invoice_item_quantity * +value * +state.customer_invoice_item_size
        })
    }, [handleItemMultiInput, state.customer_invoice_item_quantity, state.customer_invoice_item_size])

    return (
        <>
            <Flex width="100%" flexDirection="column" margin="0" padding="0">
                <Flex margin="0" padding="0">
                    <SelectWithApi
                        Api={"QUERY_PRINT_OPTIONS_LIST"}
                        onChange={handleSelectWithLabelChange}
                        value={state.customer_invoice_print_option_id}
                        label="prntnm"
                        name="customer_invoice_print_option_id"
                        withLabel
                        fetchOnFirstRun
                        selectLabelName="print_name"
                    />
                    <SelectWithApi
                        Api={"QUERY_ITEMS_LIST"}
                        onChange={handleSelectWithLabelChange}
                        value={state.customer_invoice_item_id}
                        label="itmnm"
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
                        label="wdth"
                        onChange={handleWidth}
                        width="14%"
                    />
                    <InputNumber
                        name="customer_invoice_item_height"
                        value={state.customer_invoice_item_height}
                        label="hght"
                        onChange={handleHeight}
                        width="14%"
                    />
                    <InputNumber
                        name="customer_invoice_item_size"
                        value={state.customer_invoice_item_size}
                        label="sz"
                        onChange={onChange}
                        disabled
                        width="14%"
                    />
                    <InputNumber
                        name="customer_invoice_item_quantity"
                        value={state.customer_invoice_item_quantity}
                        label="qnty"
                        onChange={handleQuantity}
                        width="14%"
                    />
                    <InputNumber
                        name="customer_invoice_item_price"
                        value={state.customer_invoice_item_price}
                        label="prc"
                        onChange={handlePrice}
                        width="14%"
                    />
                    <InputNumber
                        name="customer_invoice_item_total"
                        value={state.customer_invoice_item_total}
                        label="total"
                        onChange={onChange}
                        disabled
                        width="14%"
                    />
                    <InputText
                        name="customer_invoice_item_notes"
                        value={state.customer_invoice_item_notes}
                        label="nts"
                        onChange={onChange}
                        width="14%"
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default memo(InsertForm)