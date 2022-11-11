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

interface SupplierType {
    id?: number;
    name: string;
    email?: string;
    phone?: string;
    mobile?: string;
    address?: string
}

const Suppliers = () => {
    //@ts-ignore
    const { setSelectedRow, onDelete, onSaveAndInsertion, setMode, selectedRow, response, modal, setModal } = useTableControlsButtons("suppliers")
    const [search, setSearch] = useState("");
    const [mainTableData, setMainTableData] = useState<SupplierType[]>([
        {
            name: "",
            email: "",
            phone: "",
            mobile: "",
            address: ""
        }
    ])

    const { hidden } = useCheckUser()
    const { data } = useFetch("http://localhost:8000/suppliers")

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

    const handleSelect = useCallback((selected: SupplierType) => () => { setSelectedRow(selected) }, [setSelectedRow])

    const handleSearchMethod = useCallback(() => {
        setMainTableData(data.filter((item: SupplierType) => {
            if (search === "") return item;
            else if (item.name.toLocaleLowerCase().includes(search.toLowerCase())) return item;
        }))
    }, [data, search])

    const columns = [
        { title: "Name" },
        { title: "Email" },
        { title: "Phone" },
        { title: "Mobile" },
        { title: "Address" },
    ]


    return (
        <>
            <Header />

            <div className="Suppliers" hidden={hidden}>
                <Table
                    title={"Supplier Data"}
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
                    {mainTableData.map((Supplier: SupplierType) => {
                        return (
                            <>
                                <td onClick={handleSelect(Supplier)}>{Supplier.name}</td>
                                <td onClick={handleSelect(Supplier)}>{Supplier.email}</td>
                                <td onClick={handleSelect(Supplier)}>{Supplier.phone}</td>
                                <td onClick={handleSelect(Supplier)}>{Supplier.mobile}</td>
                                <td onClick={handleSelect(Supplier)}>{Supplier.address}</td>
                            </>
                        )
                    })}
                </Table>

                <ModalView
                    visable={modal}
                    onOK={onSaveAndInsertion}
                    onClose={handleCloseModal}
                    setSuppliers={setSelectedRow}
                    suppliers={selectedRow}
                />
            </div>
            <Footer />
        </>
    )
};

export default memo(Suppliers);
