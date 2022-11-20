import React, { memo, useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header/component';
import Footer from '../../components/Footer/component';
import useCheckUser from '../../hooks/useCheckUser';
import './style.css';
import useFetch from '../../hooks/useFetch';
import ModalView from "./Partials/ModalView";
import FormView from "./Partials/FormView";
import Table from "../../components/TableView/Table";
import useTableControlsButtons from "../../components/TableView/hooks/useTableControlsButtons"

interface ItemsType {
    id?: number;
    item_name: string;
    unit?: string;
    base_price?: string;
}

const Items = () => {
    //@ts-ignore
    const { setSelectedRow, onDelete, onSaveAndInsertion, setMode, selectedRow, response, modal, setModal } = useTableControlsButtons("items")
    const [search, setSearch] = useState("");
    const [mainTableData, setMainTableData] = useState<ItemsType[]>([
        {
            item_name: "",
            unit: "",
            base_price: "",
            id: 0
        }
    ])

    const { hidden } = useCheckUser()
    const { data } = useFetch("http://localhost:8000/items")

    useEffect(() => {
        setMainTableData(data)
    }, [data, response])

    const handleAdd = useCallback(() => {
        setMode("n")
        setModal(true)
        setSelectedRow({})
    }, [setMode, setModal, setSelectedRow])

    const handleCloseModal = useCallback(() => {
        setModal(false)
        setSelectedRow({})
        setMode("")
        setMainTableData(data)
    }, [setModal, setSelectedRow, setMode, data])

    const handleEdit = useCallback(() => {
        setMode("u")
        setModal(true)
    }, [setModal, setMode])

    const handleSelect = useCallback((selected: ItemsType) => () => { setSelectedRow(selected) }, [setSelectedRow])

    const handleSearchMethod = useCallback(() => {
        setMainTableData(data.filter((item: ItemsType) => {
            if (search === "") return item;
            else if (item.item_name.toLocaleLowerCase().includes(search.toLowerCase())) return item;
        }))
    }, [data, search])

    const columns = [
        { title: "Item Name" },
        { title: "Unit" },
        { title: "Base Price" },
    ]


    return (
        <>
            <Header />

            <div className="Items" hidden={hidden}>
                <Table
                    title={"Items Data"}
                    columns={columns}
                    Form={<FormView
                        setValue={setSearch}
                        onSearch={handleSearchMethod}
                    />}
                    hideTools={false}
                    canEdit={true}
                    canAdd={true}
                    canDelete={true}
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                    onDelete={onDelete}
                >
                    {mainTableData.map((item: ItemsType) => {
                        return (
                            <>
                                <td onClick={handleSelect(item)}>{item.item_name}</td>
                                <td onClick={handleSelect(item)}>{item.unit}</td>
                                <td onClick={handleSelect(item)}>{item.base_price}</td>
                            </>
                        )
                    })}
                </Table>

                <ModalView
                    visible={modal}
                    onOK={onSaveAndInsertion}
                    onClose={handleCloseModal}
                    setItems={setSelectedRow}
                    Items={selectedRow}
                />
            </div>
            <Footer />
        </>
    )
};

export default memo(Items);
