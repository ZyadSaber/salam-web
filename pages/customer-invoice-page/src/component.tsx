import React, { memo, useCallback, useEffect } from "react";
import { InputText } from "@commons/input-text";
import InputNumber from "@commons/input-number"
import { useMutation, useFormManager } from "@commons/hooks";
import { Table } from "@commons/table";
import Flex from "@commons/flex";
import { SelectWithApi } from "@commons/select";
import { Button } from "@commons/button";
import InsertForm from "./Partials/InsertForm";
import { columns } from "./constant"

const CustomerInvoices = () => {

    const {
        state,
        onChange,
        resetForm,
        handleRootState,
        handleArrayChange
    } = useFormManager({
        initialValues: {
            customer_id: 0,
            customer_invoice_date: "",
            customer_invoice_items: [],
            query_status: "n",
            customer_invoice_total: 0,
            customer_invoice_discount: 0,
            customer_invoice_after_discount: 0,
            customer_invoice_paid: 0,
            customer_invoice_credit: 0
        }
    })

    const {
        state: currentItemState,
        onChange: currentItemChange,
        handleRootState: handleItemMultiChange,
        handleSelectWithLabelChange,
        resetForm: resetItemForm
    } = useFormManager({
        initialValues: {
            customer_invoice_print_option_id: 0,
            customer_invoice_item_id: 0,
            customer_invoice_item_width: 0,
            customer_invoice_item_height: 0,
            customer_invoice_item_size: 0,
            customer_invoice_item_quantity: 0,
            customer_invoice_item_price: 0,
            customer_invoice_item_total: 0,
            customer_invoice_item_notes: "",
            item_name: "",
            print_name: ""
        }
    })

    const {
        setRow
    } = useMutation({
        link: "POST_CUSTOMER_INVOICE_DETAILS",
        runOnSuccess: resetForm
    })


    const handleAdd = useCallback(() => {
        handleArrayChange({
            name: "customer_invoice_items",
            value: currentItemState
        })
        resetItemForm()
    }, [currentItemState, handleArrayChange, resetItemForm]);

    const handleSave = useCallback(() => {
        setRow(state)
    }, [setRow, state]);

    const additionalButtons = [
        {
            icon: "fa-solid fa-broom",
            onClick: resetForm
        },
    ]

    useEffect(() => {
        if (Array.isArray(state.customer_invoice_items) && state.customer_invoice_items.length !== 0) {
            let totals = 0
            state.customer_invoice_items.forEach((item: any) => {
                totals = totals + item.customer_invoice_item_total
            });
            onChange({ name: "customer_invoice_total", value: totals })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.customer_invoice_items, state.customer_invoice_total])

    useEffect(() => {
        handleRootState({ ...state, customer_invoice_after_discount: state.customer_invoice_total - state.customer_invoice_discount, customer_invoice_credit: state.customer_invoice_total - state.customer_invoice_discount - state.customer_invoice_paid })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.customer_invoice_total, state.customer_invoice_discount, state.customer_invoice_paid])

    return (
        <>
            <Flex flexDirection="column" width="100%">
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
                        name="customer_invoice_date"
                        value={state.customer_invoice_date}
                        Label="dt"
                        onChange={onChange}
                        type="date"
                    />
                </Flex>
                <InsertForm
                    state={currentItemState}
                    onChange={currentItemChange}
                    handleRootState={handleItemMultiChange}
                    handleSelectWithLabelChange={handleSelectWithLabelChange}
                />
                <Table
                    columns={columns}
                    dataSource={state.customer_invoice_items}
                    actionColumn
                    actionLabel="Delete"
                    // onAction={handleDelete}
                    hideTools={false}
                    onAdd={handleAdd}
                    // onSelectedRow={setActiveItem}
                    canAdd={true}
                    additionalButtons={additionalButtons}
                />
                <Flex width='100%' justifyContent='space-around'>
                    <InputNumber
                        name='customer_invoice_total'
                        disabled
                        value={state.customer_invoice_total}
                        Label="total"
                        width="15%"
                    />
                    <InputNumber
                        name='customer_invoice_discount'
                        value={state.customer_invoice_discount}
                        Label="dscnt"
                        onChange={onChange}
                        width="15%"
                    />
                    <InputNumber
                        name='totalAfterDiscount'
                        disabled
                        value={state.customer_invoice_after_discount}
                        Label="Tlaftrdsnt"
                        width="15%"
                    />
                    <InputNumber
                        name='customer_invoice_paid'
                        value={state.customer_invoice_paid}
                        Label="paid"
                        onChange={onChange}
                        width="15%"
                    />
                    <InputNumber
                        name='customer_invoice_credit'
                        disabled
                        value={state.customer_invoice_credit}
                        Label="Crdt"
                        width="15%"
                    />
                    <Button
                        label="sv"
                        width="15%"
                        height="50%"
                        margin="30px 0"
                        onClick={handleSave}
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default memo(CustomerInvoices)