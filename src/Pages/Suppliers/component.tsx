import React, { memo, useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header/component';
import Footer from '../../components/Footer/component';
import useCheckUser from '../../hooks/useCheckUser';
import './style.css';
import useFetch from '../../hooks/useFetch';
import Button from "../../components/button/button";
import usePost from "../../hooks/usePost";
import ModalView from "./Partials/ModalView";
import useDelete from "../../hooks/useDelete";
import usePut from "../../hooks/usePut";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/TableView/Table";

interface SupplierType {
    id?: number;
    name: string;
    email?: string;
    phone?: string;
    mobile?: string;
    address?: string
}

type modeType = "n" | "d" | "u" | ""

const Suppliers = () => {
    const [Supplier, setSupplier] = useState<SupplierType>({
        name: "",
        email: "",
        phone: "",
        mobile: "",
        address: ""
    })
    const [modal, setModal] = useState(false)
    const [mode, setMode] = useState<modeType>("")
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
    const { data, setRun } = useFetch("http://localhost:8000/suppliers")
    const { success, setRow } = usePost("suppliers")
    const { success: deletesuccess, setRow: rowToDelete, setId: idToDelete } = useDelete("suppliers")
    const { success: editSuccess, setRow: rowToEdit, setId: idToEdit } = usePut("suppliers")

    useEffect(() => {
        setMainTableData(data)
    }, [data])

    const handleAdd = useCallback(() => {
        setMode("n")
        setModal(true)
        setSupplier({
            name: "",
            email: "",
            phone: "",
            mobile: "",
            address: ""
        })
    }, [])
    const handleSave = useCallback(() => {
        if (mode === "n") {
            setRow(Supplier)
            setModal(false)
            setSupplier({ name: "" })
            setMode("")
            setRun(true)
            setMainTableData(data)
        } else if (mode === "u") {
            rowToEdit(Supplier)
            idToEdit(Supplier.id)
            setModal(false)
            setSupplier({ name: "" })
            setMode("")
            setRun(true)
            setMainTableData(data)
        }
    }, [Supplier, data, idToEdit, mode, rowToEdit, setRow, setRun])
    const handleCloseModal = useCallback(() => {
        setModal(false)
        setSupplier({ name: "" })
        setMode("")
        setMainTableData(data)
    }, [data])

    const handleDelete = useCallback((SupplierToDelete: SupplierType) => () => {
        rowToDelete(SupplierToDelete)
        idToDelete(SupplierToDelete.id)
        setRun(true)
        setMainTableData(data)
    }, [data, idToDelete, rowToDelete, setRun])

    const handleEdit = useCallback((SupplierToEdit: SupplierType) => () => {
        setSupplier(SupplierToEdit)
        setMode("u")
        setModal(true)
    }, [])



    const handleSearchMethod = useCallback(() => {
        setMainTableData(data.filter((item: SupplierType) => {
            if (search === "") return item;
            else if (item.name.toLocaleLowerCase().includes(search.toLowerCase())) return item;
        }))
    }, [data, search])


    return (
        <>
            <Header />
            <div className="Supplier" hidden={hidden}>
                <section>
                    <div className="head">
                        <h1>Supplier Data</h1>
                        <div className="tableTools">

                            <div className="search">
                                <SearchBar
                                    placeholder={"Supplier Name"}
                                    setValue={setSearch}
                                    onSearch={handleSearchMethod}
                                />
                                <Button
                                    label="Add"
                                    onClick={handleAdd}
                                    margin={"0 0 0 15px"}
                                    height={"40px"}
                                    width={"15vh"}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="tbl-header">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                        <table>
                            <tbody>
                                {mainTableData.map((Supplier: SupplierType) => {
                                    return (
                                        <tr key={Supplier.id} >
                                            <td>{Supplier.name}</td>
                                            <td>{Supplier.email}</td>
                                            <td>{Supplier.phone}</td>
                                            <td>{Supplier.mobile}</td>
                                            <td>{Supplier.address}</td>
                                            <td>
                                                <div className="btns">
                                                    <Button
                                                        label="Edit"
                                                        onClick={handleEdit(Supplier)}
                                                    />
                                                    <Button
                                                        label="Delete"
                                                        onClick={handleDelete(Supplier)}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>

                <ModalView
                    visable={modal}
                    onOK={handleSave}
                    onClose={handleCloseModal}
                    setSupplier={setSupplier}
                    Supplier={Supplier}
                />
            </div>
            <Footer />
        </>
    )
};

export default memo(Suppliers);
