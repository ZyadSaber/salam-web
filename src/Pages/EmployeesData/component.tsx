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

interface EmployeesDataType {
    employee_id: number;
    name: string;
    date_of_hiring?: string;
    address?: string;
    phone?: string;
    mobile?: string;
    job_title?: string;
    email?: string;
    salary?: number;
    attendance_time?: string;
    leaving_time?: string;
    query_status?: string;
}

const EmployeesData = () => {
    //@ts-ignore
    const { setSelectedRow, onSaveAndInsertion, selectedRow, onDelete } = useTableControlsButtons("basicData/customers_dml")
    const [search, setSearch] = useState("");
    const [modal, setModal] = useState(false);
    const [mainTableData, setMainTableData] = useState<EmployeesDataType[]>([
        {
            employee_id: 1,
            name: "Zyad Ahmed",
            date_of_hiring: "2002-09-08T21:00:00.000Z",
            address: "2th Ahmed",
            phone: "01021020169",
            mobile: "0114455626",
            job_title: "Manager",
            email: "zya@gmail.com",
            salary: 3500,
            attendance_time: "09:30",
            leaving_time: "11:30",
            query_status: "q"
        }
    ])

    const { hidden } = useCheckUser()
    const { data } = useFetch("employeesData/employees")

    useEffect(() => {
        setMainTableData(data)
    }, [data])

    const handleAdd = useCallback(() => {
        setModal(true)
        setSelectedRow({ query_status: "n" })
    }, [setSelectedRow])

    const handleCloseModal = useCallback(() => {
        setModal(false)
        setMainTableData(data)
    }, [setModal, data])

    const handleEdit = useCallback(() => {
        setModal(true)
        setSelectedRow({ ...selectedRow, query_status: "u" })
    }, [selectedRow, setSelectedRow])

    const handleSearchMethod = useCallback(() => {
        setMainTableData(data.filter((item: EmployeesDataType) => {
            if (search === "") return item;
            else if (item.name.toLocaleLowerCase().includes(search.toLowerCase())) return item;
        }))
    }, [data, search])


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
                rowkey={"employee_id"}
                dataSource={mainTableData}
                onSelectedRow={setSelectedRow}
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

export default memo(EmployeesData);
