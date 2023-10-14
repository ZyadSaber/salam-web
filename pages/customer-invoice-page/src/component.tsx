import React, { memo, useCallback } from "react";
import { InputText } from "@commons/input-text";
import InputNumber from "@commons/input-number"
import { useMutation, useFormManager, useValidateForm } from "@commons/hooks";
import { onChangeType } from "@commons/global";
import { Table } from "@commons/table";
import Flex from "@commons/flex";
import { SelectWithApi } from "@commons/select";
import { Button } from "@commons/button";
import InsertForm from "./Partials/InsertForm";
import { columns, initialRootState, initialItemState, rootValidate, itemValidate } from "./constant";

const CustomerInvoices = () => {

    const {
        state,
        onChange,
        resetForm,
        handleMultiInput,
        handleArrayChange
    } = useFormManager({
        initialValues: initialRootState
    })

    const {
        state: currentItemState,
        onChange: currentItemChange,
        handleMultiInput: handleItemMultiInput,
        handleSelectWithLabelChange,
        resetForm: resetItemForm
    } = useFormManager({
        initialValues: initialItemState
    })

    const {
        setRow
    } = useMutation({
        link: "POST_CUSTOMER_INVOICE_DETAILS",
        runOnSuccess: resetForm
    })


    const handleAdd = useCallback(() => {
        handleArrayChange({ name: "customer_invoice_items", value: currentItemState })
        let totals = 0
        state.customer_invoice_items.forEach((item: any) => {
            totals = totals + item.customer_invoice_item_total
        });
        handleMultiInput({
            customer_invoice_items: [
                ...state.customer_invoice_items,
                currentItemState
            ],
            customer_invoice_total: totals + currentItemState.customer_invoice_item_total
        })
        resetItemForm()
    }, [currentItemState, handleArrayChange, handleMultiInput, resetItemForm, state.customer_invoice_items])

    const handleDiscount = useCallback(({ name, value }: onChangeType) => {
        handleMultiInput({
            [name]: value,
            customer_invoice_after_discount: state.customer_invoice_total - +value
        })
    }, [handleMultiInput, state.customer_invoice_total])

    const handlePaid = useCallback(({ name, value }: onChangeType) => {
        handleMultiInput({
            [name]: value,
            customer_invoice_credit: state.customer_invoice_total - state.customer_invoice_discount - +value
        })
    }, [handleMultiInput, state.customer_invoice_discount, state.customer_invoice_total])

    const handleSave = useCallback(() => {
        setRow(state)
    }, [setRow, state]);

    const additionalButtons = [
        {
            icon: "fa-solid fa-broom",
            onClick: resetForm
        },
    ]

    //TODO: add Delete Function and make sure to update the total and credit
    const handleDelete = (e: any) => {
        console.log(e)
    }

    const handleValidateFelids = useValidateForm({
        validateFelids: itemValidate,
        functionToRun: handleAdd,
        stateToValidate: currentItemState
    })

    const handleValidateInvoiceFelids = useValidateForm({
        validateFelids: rootValidate,
        functionToRun: handleSave,
        stateToValidate: state
    })

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
                    handleItemMultiInput={handleItemMultiInput}
                    handleSelectWithLabelChange={handleSelectWithLabelChange}
                />
                <Table
                    columns={columns}
                    dataSource={state.customer_invoice_items}
                    actionColumn
                    actionLabel="Delete"
                    onAction={handleDelete}
                    hideTools={false}
                    onAdd={handleValidateFelids}
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
                        onChange={handleDiscount}
                        width="15%"
                    />
                    <InputNumber
                        name='totalAfterDiscount'
                        disabled
                        value={state.customer_invoice_after_discount}
                        Label="tlaftrdsnt"
                        width="15%"
                    />
                    <InputNumber
                        name='customer_invoice_paid'
                        value={state.customer_invoice_paid}
                        Label="paid"
                        onChange={handlePaid}
                        width="15%"
                    />
                    <InputNumber
                        name='customer_invoice_credit'
                        disabled
                        value={state.customer_invoice_credit}
                        Label="crdt"
                        width="15%"
                    />
                    <Button
                        label="sv"
                        width="15%"
                        height="50%"
                        margin="30px 0"
                        onClick={handleValidateInvoiceFelids}
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default memo(CustomerInvoices)