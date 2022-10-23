import React, { memo, useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header/component';
import Footer from '../../components/Footer/component';
import useCheckUser from '../../hooks/useCheckUser';
import './style.css';
import useFetch from '../../hooks/useFetch';
import ModalView from "./Partials/ModalView";
import FormView from "./Partials/FormView";
import Table from "../../components/TableView/Table";
import useTableControlsButtons from "../../components/TableView/hooks/useTableControlsButtons";
import { columns } from "./constants"

interface customerType {
    customer_id?: number;
    name: string;
    email?: string;
    phone?: string;
    mobile?: string;
    address?: string
}

const Customers = () => {
    //@ts-ignore
    const { setSelectedRow, onSaveAndInsertion, setMode, selectedRow, onDelete } = useTableControlsButtons("customers")
    const [search, setSearch] = useState("");
    const [modal, setModal] = useState(false);
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
    const { data } = useFetch("basicData/customers")

    useEffect(() => {
        setMainTableData(data)
    }, [data])

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

    const handleSearchMethod = useCallback(() => {
        setMainTableData(data.filter((item: customerType) => {
            if (search === "") return item;
            else if (item.name.toLocaleLowerCase().includes(search.toLowerCase())) return item;
        }))
    }, [data, search])

    console.log()

    return (<>
        <Header />

        <div className="customers" hidden={hidden}>
            <Table
                title={"Customers Data"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={onDelete}
                rowkey={"customer_id"}
                dataSource={mainTableData}
            >
                <FormView
                    setValue={setSearch}
                    onSearch={handleSearchMethod}
                />
            </Table>

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
