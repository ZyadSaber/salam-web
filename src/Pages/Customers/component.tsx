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

interface customerType {
    id?: number;
    name: string;
    email?: string;
    phone?: string;
    mobile?: string;
    address?: string
}

const Customers = () => {
    //@ts-ignore
    const { setSelectedRow, onDelete, onSaveAndInsertion, setMode, selectedRow, response, modal, setModal } = useTableControlsButtons("customers")
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
    const { data } = useFetch("customers")
    console.log(data)

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

    const handleSelect = useCallback((selected: customerType) => () => { setSelectedRow(selected) }, [setSelectedRow])

    const handleSearchMethod = useCallback(() => {
        setMainTableData(data.filter((item: customerType) => {
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


    return (<>
        <Header />

        <div className="customers" hidden={hidden}>
            {/* <Table
                title={"Customers Data"}
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
                {mainTableData.map((customer: customerType) => {
                    return (
                        <>
                            <td onClick={handleSelect(customer)}>{customer.name}</td>
                            <td onClick={handleSelect(customer)}>{customer.email}</td>
                            <td onClick={handleSelect(customer)}>{customer.phone}</td>
                            <td onClick={handleSelect(customer)}>{customer.mobile}</td>
                            <td onClick={handleSelect(customer)}>{customer.address}</td>

                        </>
                    )
                })}
            </Table> */}

            <ModalView
                visable={modal}
                onOK={onSaveAndInsertion}
                onClose={handleCloseModal}
                setCustomer={setSelectedRow}
                customer={selectedRow}
            />
        </div>
        <Footer />
    </>)

};

export default memo(Customers);
