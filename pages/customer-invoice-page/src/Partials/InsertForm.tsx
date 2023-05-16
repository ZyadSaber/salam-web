import React, { memo, useCallback, useEffect } from "react";
import { SelectWithApi } from "@commons/select";
import { InputText } from "@commons/input-text";
import Flex from "@commons/flex";

interface InsertFormProp {
    activeItem: any;
    setActiveItem: any;
    itemState: any;
    itemChange: any;
    state: any;
    onChange: any
}

const InsertForm = ({
    activeItem,
    setActiveItem,
    itemChange,
    itemState,
    state,
    onChange
}: InsertFormProp) => {

    const { item_id, width, height, size, quantity, price, total, notes, print_id } = itemState

    useEffect(() => {
        setActiveItem({ ...activeItem, size: +width * +height, total: +quantity * +price * +width * +height })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [height, width, quantity, price])

    const handleItemChange = useCallback((onChange: any) => {
        //@ts-ignore
        setActiveItem({ ...activeItem, itemName: onChange.label, [onChange.name]: onChange.value })
    }, [activeItem, setActiveItem])
    const handlePrintChange = useCallback((onChange: any) => {
        //@ts-ignore
        setActiveItem({ ...activeItem, print_name: onChange.label, [onChange.name]: onChange.value })
    }, [activeItem, setActiveItem])

    return (
        <>
            <Flex width="100%" flexDirection="column" margin="0" padding="0">
                <Flex margin="0" padding="0">
                    <SelectWithApi
                        Api={"QUERY_CUSTOMERS_LIST"}
                        onChange={onChange}
                        value={state.customer_id}
                        Label="cstmr"
                        name="customer_id"
                        fetchOnFirstRun
                    />
                    <InputText
                        name="date"
                        value={state.date}
                        Label="dt"
                        onChange={onChange}
                        type="date"
                    />
                </Flex>
                <Flex margin="0" padding="0">
                    <SelectWithApi
                        Api={"QUERY_PRINT_OPTIONS_LIST"}
                        onChange={handlePrintChange}
                        value={print_id}
                        Label="prntnm"
                        name="print_id"
                        withLabel
                        fetchOnFirstRun
                    />
                    <SelectWithApi
                        Api={"QUERY_ITEMS_LIST"}
                        onChange={handleItemChange}
                        value={item_id}
                        Label="itmnm"
                        name="item_id"
                        withLabel
                        fetchOnFirstRun
                    />
                </Flex>
                <Flex margin="0" padding="0">
                    <InputText
                        name="width"
                        value={width}
                        Label="wdth"
                        onChange={itemChange}
                        width="14%"
                    />
                    <InputText
                        name="height"
                        value={height}
                        Label="hght"
                        onChange={itemChange}
                        width="14%"
                    />
                    <InputText
                        name="size"
                        value={size}
                        Label="sz"
                        onChange={itemChange}
                        disabled
                        width="14%"
                    />
                    <InputText
                        name="quantity"
                        value={quantity}
                        Label="qnty"
                        onChange={itemChange}
                        width="14%"
                    />
                    <InputText
                        name="price"
                        value={price}
                        Label="prc"
                        onChange={itemChange}
                        width="14%"
                    />
                    <InputText
                        name="total"
                        value={total}
                        Label="total"
                        onChange={itemChange}
                        disabled
                        width="14%"
                    />
                    <InputText
                        name="notes"
                        value={notes}
                        Label="nts"
                        onChange={itemChange}
                        width="14%"
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default memo(InsertForm)