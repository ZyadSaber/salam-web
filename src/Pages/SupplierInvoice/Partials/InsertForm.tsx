import { memo, useCallback, useEffect } from "react";
import SelectWithApi from "../../../components/Select/SelectWithApi";
import InputText from "../../../components/InputText/InputText";

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

    const { item_id, width, height, size, quantity, price, total, notes } = itemState

    useEffect(() => {
        setActiveItem({ ...activeItem, size: +width * +height, total: +quantity * +price * +width * +height })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [height, width, quantity, price])

    const handleItemChange = useCallback((onChange: any) => {
        //@ts-ignore
        setActiveItem({ ...activeItem, itemName: onChange.label, [onChange.name]: onChange.value })
    }, [activeItem, setActiveItem])

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                <div style={{ marginRight: "20px" }}>
                    <SelectWithApi
                        Api={"basicData/supplier_pop_data"}
                        onChange={onChange}
                        value={state.supplier_id}
                        Label="Supplier"
                        name="supplier_id"
                        fetchOnFirstRun
                    />
                </div>
                <InputText
                    name="date"
                    value={state.date}
                    Label="Date"
                    onChange={onChange}
                    type="date"
                />
            </div>
            <SelectWithApi
                Api={"basicData/items_pop_data"}
                onChange={handleItemChange}
                value={item_id}
                Label="Item"
                name="item_id"
                withLabel
                fetchOnFirstRun
            />
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>

                <InputText
                    name="width"
                    value={width}
                    Label="width"
                    onChange={itemChange}
                    width="90%"
                />
                <InputText
                    name="height"
                    value={height}
                    Label="height"
                    onChange={itemChange}
                    width="90%"
                />
                <InputText
                    name="size"
                    value={size}
                    Label="size"
                    onChange={itemChange}
                    disabled
                    width="90%"
                />
                <InputText
                    name="quantity"
                    value={quantity}
                    Label="quantity"
                    onChange={itemChange}
                    width="90%"
                />
                <InputText
                    name="price"
                    value={price}
                    Label="price"
                    onChange={itemChange}
                    width="90%"
                />
                <InputText
                    name="total"
                    value={total}
                    Label="total"
                    onChange={itemChange}
                    disabled
                    width="90%"
                />
                <InputText
                    name="notes"
                    value={notes}
                    Label="notes"
                    onChange={itemChange}
                    width="90%"
                />
            </div>
        </>
    )
}

export default memo(InsertForm)