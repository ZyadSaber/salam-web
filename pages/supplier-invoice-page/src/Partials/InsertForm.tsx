import React, { memo, useCallback } from "react";
import { SelectWithApi } from "@commons/select";
import { InputText } from "@commons/input-text";
import Flex from "@commons/flex";
import InputNumber from "@commons/input-number"
import {onChangeType} from"@commons/global"

interface InsertFormProp {
    onChange: any;
    state: any;
    handleSelectWithLabelChange: any
    handleItemMultiInput?: any
}

const InsertForm = ({
    onChange,
    state,
    handleSelectWithLabelChange,
    handleItemMultiInput
}: InsertFormProp) => {

    const handleWidth = useCallback(({name, value}:onChangeType)=>{
        handleItemMultiInput({
            [name]:value,
            supplier_invoice_item_size: +(+value * +state.supplier_invoice_item_height).toFixed(2),
            supplier_invoice_item_total: +(+value * +state.supplier_invoice_item_height * +state.supplier_invoice_item_quantity * +state.supplier_invoice_item_price).toFixed(2)
        })
    },[handleItemMultiInput, state.supplier_invoice_item_height, state.supplier_invoice_item_price, state.supplier_invoice_item_quantity])
    const handleHeight = useCallback(({name, value}:onChangeType)=>{
        handleItemMultiInput({
            [name]:value,
            supplier_invoice_item_size: +(+value * +state.supplier_invoice_item_width).toFixed(2),
            supplier_invoice_item_total: +(+value * +state.supplier_invoice_item_width * +state.supplier_invoice_item_quantity * +state.supplier_invoice_item_price).toFixed(2)
        })
    },[handleItemMultiInput, state.supplier_invoice_item_price, state.supplier_invoice_item_quantity, state.supplier_invoice_item_width])
    const handleQuantity = useCallback(({name, value}:onChangeType)=>{
        handleItemMultiInput({
            [name]:value,
            supplier_invoice_item_total: +value * +state.supplier_invoice_item_price *  +state.supplier_invoice_item_size
        })
    },[handleItemMultiInput, state.supplier_invoice_item_price, state.supplier_invoice_item_size])
    const handlePrice = useCallback(({name, value}:onChangeType)=>{
        handleItemMultiInput({
            [name]:value,
            supplier_invoice_item_total: +state.supplier_invoice_item_quantity * +value * +state.supplier_invoice_item_size
        })
    },[handleItemMultiInput, state.supplier_invoice_item_quantity, state.supplier_invoice_item_size])
    

    return (
        <>
            <Flex width="100%" flexDirection="column" margin="0" padding="0">
                <Flex margin="0" padding="0">
                    <SelectWithApi
                        api="QUERY_ITEMS_LIST"
                        onChange={handleSelectWithLabelChange}
                        value={state.supplier_invoice_item_id}
                        label="itmnm"
                        name="supplier_invoice_item_id"
                        withLabel
                        fetchOnFirstRun
                        selectLabelName="item_name"
                    />
                </Flex>
                <Flex margin="0" padding="0">
                    <InputNumber
                        name="supplier_invoice_item_width"
                        value={state.supplier_invoice_item_width}
                        label="wdth"
                        onChange={handleWidth}
                        width="14%"
                    />
                    <InputNumber
                        name="supplier_invoice_item_height"
                        value={state.supplier_invoice_item_height}
                        label="hght"
                        onChange={handleHeight}
                        width="14%"
                    />
                    <InputNumber
                        name="supplier_invoice_item_size"
                        value={state.supplier_invoice_item_size}
                        label="sz"
                        onChange={onChange}
                        disabled
                        width="14%"
                    />
                    <InputNumber
                        name="supplier_invoice_item_quantity"
                        value={state.supplier_invoice_item_quantity}
                        label="qty"
                        onChange={handleQuantity}
                        width="14%"
                    />
                    <InputNumber
                        name="supplier_invoice_item_price"
                        value={state.supplier_invoice_item_price}
                        label="prc"
                        onChange={handlePrice}
                        width="14%"
                    />
                    <InputNumber
                        name="supplier_invoice_item_total"
                        value={state.supplier_invoice_item_total}
                        label="total"
                        onChange={onChange}
                        disabled
                        width="14%"
                    />
                    <InputText
                        name="supplier_invoice_item_notes"
                        value={state.supplier_invoice_item_notes}
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