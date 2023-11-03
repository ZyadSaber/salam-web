import React, { memo, useCallback } from 'react';
import { Table } from "@commons/table";
import DatePicker from "@commons/date-picker"
import { onChangeType } from "@commons/global";
import { useFormManager, useMutation, useValidateForm } from "@commons/hooks";
import { SelectWithApi } from "@commons/select";
import { Button } from "@commons/button";
import Flex from "@commons/flex";
import InputNumber from "@commons/input-number";
import { columns, initialRootState, initialItemState, rootValidate, itemValidate } from "./constants";
import InsertForm from "./Partials/InsertForm";

const SupplierInvoice = () => {

    const {
        state,
        onChange,
        resetForm,
        handleArrayChange,
        handleMultiInput,
        handleSelectWithLabelChange: mainStateHandleSelectWithLabelChange
    } = useFormManager({
        initialValues: initialRootState
    })

    const {
        state: currentItemState,
        onChange: currentItemChange,
        handleSelectWithLabelChange,
        resetForm: resetItemForm,
        handleMultiInput: handleItemMultiInput
    } = useFormManager({
        initialValues: initialItemState
    })

    const { setRow } = useMutation({ link: "POST_SUPPLIER_INVOICE", runOnSuccess: resetForm })

    const handleSave = useCallback(() => {
        setRow(state)
    }, [setRow, state]);

    const additionalButtons = [
        {
            icon: "fa-solid fa-broom",
            onClick: resetForm
        },
    ]

    const handleAdd = useCallback(() => {
        handleArrayChange({ name: "supplier_invoice_items", value: {...currentItemState, rowKey: state.supplier_invoice_items.length + 1} })
        let totals = 0
        state.supplier_invoice_items.forEach((item: any) => {
            totals = totals + item.supplier_invoice_item_total
        });
        const computedTotals = totals + currentItemState.supplier_invoice_item_total
        handleMultiInput({
            supplier_invoice_items: [
                ...state.supplier_invoice_items,
                currentItemState
            ],
            supplier_invoice_total: computedTotals,
            supplier_invoice_after_discount:  computedTotals - state.supplier_invoice_discount,
            supplier_invoice_credit: computedTotals - state.supplier_invoice_discount - state.supplier_invoice_paid
        })
        resetItemForm()
    }, [currentItemState, handleArrayChange, handleMultiInput, resetItemForm, state.supplier_invoice_discount, state.supplier_invoice_items, state.supplier_invoice_paid])

    const handleDiscount = useCallback(({ name, value }: onChangeType) => {
        handleMultiInput({
            [name]: value,
            supplier_invoice_after_discount: state.supplier_invoice_total - +value
        })
    }, [handleMultiInput, state.supplier_invoice_total])

    const handlePaid = useCallback(({ name, value }: onChangeType) => {
        handleMultiInput({
            [name]: value,
            supplier_invoice_credit: state.supplier_invoice_total - state.supplier_invoice_discount - +value
        })
    }, [handleMultiInput, state.supplier_invoice_discount, state.supplier_invoice_total])

    //TODO: add Delete Function and make sure to update the total and credit
    const handleDelete = (e: any) => {
        const computedItems = state.supplier_invoice_items.filter((f:any)=> e.rowKey !== f.rowKey )
        const totalAfterDelete = state.supplier_invoice_total - state.supplier_invoice_item_total
        handleMultiInput({
            supplier_invoice_items: computedItems,
            supplier_invoice_total:totalAfterDelete,
            supplier_invoice_after_discount:totalAfterDelete - state.supplier_invoice_discount,
            supplier_invoice_credit:totalAfterDelete - state.supplier_invoice_discount - state.supplier_invoice_paid
        })
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

            <Flex flexDirection='column' width='100%'>
                <Flex margin="0" padding="0">
                    <SelectWithApi
                        api="QUERY_SUPPLIER_LIST"
                        onChange={mainStateHandleSelectWithLabelChange}
                        value={state.supplier_id}
                        label="splr"
                        name="supplier_id"
                        fetchOnFirstRun
                        withLabel
                        selectLabelName="supplier_name"
                    />
                    <DatePicker
                        name="supplier_invoice_date"
                        value={state.supplier_invoice_date}
                        label="dt"
                        onChange={onChange}
                    />
                </Flex>
                <InsertForm
                    state={currentItemState}
                    onChange={currentItemChange}
                    handleSelectWithLabelChange={handleSelectWithLabelChange}
                    handleItemMultiInput={handleItemMultiInput}
                />
                <Table
                    columns={columns}
                    dataSource={state.supplier_invoice_items}
                    actionColumn
                    actionLabel="Delete"
                    rowKey="supplier_invoice_item_id"
                    onAction={handleDelete}
                    hideTools={false}
                    onAdd={handleValidateFelids}
                    canAdd={true}
                    canPrint
                    additionalButtons={additionalButtons}
                />
                <Flex width='100%' justifyContent='space-around'>
                    <InputNumber
                        name='supplier_invoice_total'
                        disabled
                        value={state.supplier_invoice_total}
                        label="total"
                        width="15%"
                    />
                    <InputNumber
                        name='supplier_invoice_discount'
                        value={state.supplier_invoice_discount}
                        label="dscnt"
                        onChange={handleDiscount}
                        width="15%"
                    />
                    <InputNumber
                        name='supplier_invoice_after_discount'
                        disabled
                        value={state.supplier_invoice_after_discount}
                        label="tlaftrdsnt"
                        width="15%"
                    />
                    <InputNumber
                        name='supplier_invoice_paid'
                        value={state.handlePaid}
                        label="paid"
                        onChange={handlePaid}
                        width="15%"
                    />
                    <InputNumber
                        name='supplier_invoice_credit'
                        disabled
                        value={state.supplier_invoice_credit}
                        label="crdt"
                        width="15%"
                    />
                    <Button
                        label="sv"
                        width="15%"
                        margin="30px 0"
                        onClick={handleValidateInvoiceFelids}
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default memo(SupplierInvoice);