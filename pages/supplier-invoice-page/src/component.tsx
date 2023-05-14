import React, { memo, useState, useCallback, useEffect } from 'react';
import { Table } from "@commons/table";
import { InputText } from "@commons/input-text";
import { useFormManager, usePost } from "@commons/hooks";
import { columns } from "./constants";
import InsertForm from "./Partials/InsertForm";
import { itemsType, invoiceDtls } from "./interface";
import Flex from "@commons/flex";

const SupplierInvoice = () => {

    const { setRow } = usePost({ link: "POST_SUPPLIER_INVOICE" })

    const [itemsType, setItemsType] = useState<invoiceDtls>({
        supplier_id: 0,
        date: "",
        items: [],
        query_status: "n",
        total: 0,
        discount: 0,
        total_after_discount: 0,
        paid: 0,
        credit: 0
    })
    const [activeItem, setActiveItem] = useState<itemsType>({
        item_id: 0,
        width: 0,
        height: 0,
        size: 0,
        quantity: 0,
        price: 0,
        total: 0,
        notes: "",
        itemName: ""
    })

    const { state: itemState, onChange: itemChange } = useFormManager({ initialValue: activeItem, setSelectedRow: setActiveItem })
    const { state, onChange } = useFormManager({ initialValue: itemsType, setSelectedRow: setItemsType })

    const resetItemsType = useCallback(() => {
        //@ts-ignore
        setItemsType({
            supplier_id: 0,
            date: "",
            items: [],
            query_status: "n",
            total: 0,
            discount: 0,
            total_after_discount: 0,
            paid: 0,
            credit: 0
        })
    }, [])

    const handleAdd = useCallback(() => {
        setItemsType({ ...itemsType, items: [...itemsType.items, activeItem], total: itemsType.total + activeItem.total })
        setActiveItem({
            item_id: 0,
            width: 0,
            height: 0,
            size: 0,
            quantity: 0,
            price: 0,
            total: 0,
            notes: "",
            itemName: ""
        })

    }, [activeItem, itemsType]);

    const handleSave = useCallback(() => {
        setRow(itemsType)
        resetItemsType()
    }, [itemsType, resetItemsType, setRow]);

    useEffect(() => {
        setItemsType({ ...itemsType, total_after_discount: itemsType.total - itemsType.discount, credit: itemsType.total - itemsType.discount - itemsType.paid })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemsType.total, itemsType.discount, itemsType.paid])

    const additionalButtons = [
        {
            icon: "fa-solid fa-broom",
            onClick: resetItemsType
        },
    ]
    return (
        <>
            <Flex flexDirection='column' width='100%'>
                <InsertForm
                    itemState={itemState}
                    itemChange={itemChange}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    onChange={onChange}
                    state={state}
                />
                <Table
                    columns={columns}
                    dataSource={itemsType.items}
                    actionColumn
                    actionLabel="Delete"
                    // onAction={handleDelete}
                    hideTools={false}
                    onAdd={handleAdd}
                    onSave={handleSave}
                    onSelectedRow={setActiveItem}
                    canAdd={true}
                    canSave={true}
                    additionalButtons={additionalButtons}
                />
                <Flex width='100%' justifyContent='space-around'>
                    <InputText
                        name='total'
                        disabled
                        value={state.total}
                        Label="total"
                        width="15%"
                    />
                    <InputText
                        name='discount'
                        value={state.discount}
                        Label="dscnt"
                        onChange={onChange}
                        width="15%"
                    />
                    <InputText
                        name='totalAfterDiscount'
                        disabled
                        value={state.total_after_discount}
                        Label="Tlaftrdsnt"
                        width="15%"
                    />
                    <InputText
                        name='paid'
                        value={state.paid}
                        Label="paid"
                        onChange={onChange}
                        width="15%"
                    />
                    <InputText
                        name='credit'
                        disabled
                        value={state.credit}
                        Label="Crdt"
                        width="15%"
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default memo(SupplierInvoice);