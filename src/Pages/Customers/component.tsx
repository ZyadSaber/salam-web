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

interface customerType {
    id?: number;
    name: string;
    email?: string;
    phone?: string;
    mobile?: string;
    address?: string
}

type modeType = "n" | "d" | "u" | ""

const Customers = () => {
    const [customer, setCustomer] = useState<customerType>({
        name: "",
        email: "",
        phone: "",
        mobile: "",
        address: ""
    })
    const [modal, setModal] = useState(false)
    const [mode, setMode] = useState<modeType>("")
    const [search, setSearch] = useState("");
    const [mainTableData, setMainTableData] = useState<customerType[]>([
        {
            name: "",
            email: "",
            phone: "",
            mobile: "",
            address: ""
        }
    ])

    const { hidden } = useCheckUser()
    const { data, setRun } = useFetch("http://localhost:8000/customers")
    const { success, setRow } = usePost("customers")
    const { success: deletesuccess, setRow: rowToDelete, setId: idToDelete } = useDelete("customers")
    const { success: editSuccess, setRow: rowToEdit, setId: idToEdit } = usePut("customers")

    useEffect(() => {
        setMainTableData(data)
    }, [data])

    const handleAdd = useCallback(() => {
        setMode("n")
        setModal(true)
        setCustomer({
            name: "",
            email: "",
            phone: "",
            mobile: "",
            address: ""
        })
    }, [])
    const handleSave = useCallback(() => {
        if (mode === "n") {
            setRow(customer)
            setModal(false)
            setCustomer({ name: "" })
            setMode("")
            setRun(true)
            setMainTableData(data)
        } else if (mode === "u") {
            rowToEdit(customer)
            idToEdit(customer.id)
            setModal(false)
            setCustomer({ name: "" })
            setMode("")
            setRun(true)
            setMainTableData(data)
        }
    }, [customer, data, idToEdit, mode, rowToEdit, setRow, setRun])
    const handleCloseModal = useCallback(() => {
        setModal(false)
        setCustomer({ name: "" })
        setMode("")
        setMainTableData(data)
    }, [data])

    const handleDelete = useCallback((customerToDelete: customerType) => () => {
        rowToDelete(customerToDelete)
        idToDelete(customerToDelete.id)
        setRun(true)
        setMainTableData(data)
    }, [data, idToDelete, rowToDelete, setRun])

    const handleEdit = useCallback((customerToEdit: customerType) => () => {
        setCustomer(customerToEdit)
        setMode("u")
        setModal(true)
    }, [])



    const handleSearchMethod = useCallback(() => {
        setMainTableData(data.filter((item: customerType) => {
            if (search === "") return item;
            else if (item.name.toLocaleLowerCase().includes(search.toLowerCase())) return item;
        }))
    }, [data, search])


    return (
        <>
            <Header />
            <div className="customers" hidden={hidden}>
                <section>
                    <div className="head">
                        <h1>Customers Data</h1>
                        <div className="tableTools">

                            <div className="search">
                                <SearchBar
                                    placeholder={"Customer Name"}
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
                                {mainTableData.map((customer: customerType) => {
                                    return (
                                        <tr key={customer.id} >
                                            <td>{customer.name}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.phone}</td>
                                            <td>{customer.mobile}</td>
                                            <td>{customer.address}</td>
                                            <td>
                                                <div className="btns">
                                                    <Button
                                                        label="Edit"
                                                        onClick={handleEdit(customer)}
                                                    />
                                                    <Button
                                                        label="Delete"
                                                        onClick={handleDelete(customer)}
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
                    setCustomer={setCustomer}
                    customer={customer}
                />
            </div>
            <Footer />
        </>
    )
};

export default memo(Customers);
