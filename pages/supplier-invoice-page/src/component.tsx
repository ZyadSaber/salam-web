import React, { memo, useCallback, useEffect } from 'react';
import { Table } from "@commons/table";
import DatePicker from "@commons/date-picker"
import { defaultDate } from "@commons/global";
import { useFormManager, useMutation } from "@commons/hooks";
import { SelectWithApi } from "@commons/select";
import { Button } from "@commons/button";
import Flex from "@commons/flex";
import InputNumber from "@commons/input-number"
// import { useReactToPrint } from 'react-to-print';
// import ComponentToPrint from './Partials/printModal';
import { columns } from "./constants";
import InsertForm from "./Partials/InsertForm";

const SupplierInvoice = () => {

    // const ComponentRef = useRef();

    const {
        state,
        onChange,
        resetForm,
        handleRootState,
        handleArrayChange,
        handleSelectWithLabelChange: mainStateHandleSelectWithLabelChange
    } = useFormManager({
        initialValues: {
            supplier_id: 0,
            supplier_name: "",
            supplier_invoice_date: defaultDate,
            supplier_invoice_items: [],
            query_status: "n",
            supplier_invoice_total: 0,
            supplier_invoice_discount: 0,
            supplier_invoice_after_discount: 0,
            supplier_invoice_paid: 0,
            supplier_invoice_credit: 0
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
            supplier_invoice_item_id: 0,
            supplier_invoice_item_width: 0,
            supplier_invoice_item_height: 0,
            supplier_invoice_item_size: 0,
            supplier_invoice_item_quantity: 0,
            supplier_invoice_item_price: 0,
            supplier_invoice_item_total: 0,
            supplier_invoice_item_notes: "",
            item_name: ""
        }
    })

    const { setRow } = useMutation({ link: "POST_SUPPLIER_INVOICE", runOnSuccess: resetForm })

    // const handlePrint = useReactToPrint({
    //     //@ts-ignore
    //     content: () => ComponentRef.current,
    // });

    const handleSave = useCallback(() => {
        setRow(state)
    }, [setRow, state]);

    useEffect(() => {
        if (Array.isArray(state.supplier_invoice_items) && state.supplier_invoice_items.length !== 0) {
            let totals = 0
            state.supplier_invoice_items.forEach((item: any) => {
                totals = totals + item.supplier_invoice_item_total
            });
            onChange({ name: "supplier_invoice_total", value: totals })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.supplier_invoice_items])

    useEffect(() => {
        handleRootState({ ...state, supplier_invoice_after_discount: state.supplier_invoice_total - state.supplier_invoice_discount, supplier_invoice_credit: state.supplier_invoice_total - state.supplier_invoice_discount - state.supplier_invoice_paid })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.supplier_invoice_total, state.supplier_invoice_discount, state.supplier_invoice_paid])

    const additionalButtons = [
        {
            icon: "fa-solid fa-broom",
            onClick: resetForm
        },
    ]

    const handleAdd = useCallback(() => {
        handleArrayChange({ name: "supplier_invoice_items", value: currentItemState })
        resetItemForm()
    }, [currentItemState, handleArrayChange, resetItemForm])

    return (
        <>

            <Flex flexDirection='column' width='100%'>
                <Flex margin="0" padding="0">
                    <SelectWithApi
                        Api="QUERY_SUPPLIER_LIST"
                        onChange={mainStateHandleSelectWithLabelChange}
                        value={state.supplier_id}
                        Label="splr"
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
                    handleRootState={handleItemMultiChange}
                    handleSelectWithLabelChange={handleSelectWithLabelChange}
                />
                <Table
                    columns={columns}
                    dataSource={state.supplier_invoice_items}
                    actionColumn
                    actionLabel="Delete"
                    // onAction={handleDelete}
                    hideTools={false}
                    onAdd={handleAdd}
                    canAdd={true}
                    canPrint
                    additionalButtons={additionalButtons}
                />
                <Flex width='100%' justifyContent='space-around'>
                    <InputNumber
                        name='supplier_invoice_total'
                        disabled
                        value={state.supplier_invoice_total}
                        Label="total"
                        width="15%"
                    />
                    <InputNumber
                        name='supplier_invoice_discount'
                        value={state.supplier_invoice_discount}
                        Label="dscnt"
                        onChange={onChange}
                        width="15%"
                    />
                    <InputNumber
                        name='supplier_invoice_after_discount'
                        disabled
                        value={state.supplier_invoice_after_discount}
                        Label="Tlaftrdsnt"
                        width="15%"
                    />
                    <InputNumber
                        name='supplier_invoice_paid'
                        value={state.supplier_invoice_paid}
                        Label="paid"
                        onChange={onChange}
                        width="15%"
                    />
                    <InputNumber
                        name='supplier_invoice_credit'
                        disabled
                        value={state.supplier_invoice_credit}
                        Label="Crdt"
                        width="15%"
                    />
                    <Button
                        label="sv"
                        width="15%"
                        margin="30px 0"
                        onClick={handleSave}
                    />
                </Flex>
            </Flex>
            {/* <ComponentToPrint state={state} /> */}
        </>
    )
}

export default memo(SupplierInvoice);