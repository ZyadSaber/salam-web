import { memo, useState, useCallback, useEffect } from 'react';
import "./style.css";
import usePost from '../../hooks/usePost';
import Table from '../../components/TableView/Table';
import InputText from '../../components/InputText/InputText';
import useFormManager from '../../hooks/useFormManager';
import { columns } from "./constants";
import InsertForm from "./Partials/InsertForm"
import { itemsType, invoiceDtls } from "./interface"

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

    // const handleDelete = useCallback((passedItem: itemsType) => {
    //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    //     let newItems = itemsType.items.filter((item: itemsType) => { item !== passedItem })
    //     // setItemsType({ ...itemsType, items: newItems })
    //     console.log(newItems)
    // }, [itemsType]);

    const handleSave = useCallback(() => {
        setRow(itemsType)
        resetItemsType()
    }, [itemsType, resetItemsType, setRow]);

    useEffect(() => {
        setItemsType({ ...itemsType, total_after_discount: itemsType.total - itemsType.discount, credit: itemsType.total - itemsType.discount - itemsType.paid })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemsType.total, itemsType.discount, itemsType.paid])

    const addionalButtons = [
        {
            icon: "fa-solid fa-broom",
            onClick: resetItemsType
        },
    ]
    return (
        <>

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
                addionalButtons={addionalButtons}
            >
                <InsertForm
                    itemState={itemState}
                    itemChange={itemChange}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    onChange={onChange}
                    state={state}
                />
            </Table>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", padding: "0 100px" }}>
                <InputText
                    name='total'
                    disabled
                    //@ts-ignore
                    value={state.total}
                    Label="Total"
                />
                <InputText
                    name='discount'
                    //@ts-ignore
                    value={state.discount}
                    Label="Discount"
                    onChange={onChange}
                />
                <InputText
                    name='totalAfterDiscount'
                    disabled
                    //@ts-ignore
                    value={state.total_after_discount}
                    Label="Total After Discount"
                />
                <InputText
                    name='paid'
                    //@ts-ignore
                    value={state.paid}
                    Label="Paid"
                    onChange={onChange}
                />
                <InputText
                    name='credit'
                    disabled
                    //@ts-ignore
                    value={state.credit}
                    Label="Credit"
                />
            </div>
        </>
    )
}

export default memo(SupplierInvoice);