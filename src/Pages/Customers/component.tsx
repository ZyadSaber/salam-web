import React, { memo } from 'react';
import Header from '../../components/Header/component';
import Footer from '../../components/Footer/component';
import useCheckUser from '../../hooks/useCheckUser';
import './style.css';
import useFetch from '../../hooks/useFetch';
import Button from "../../components/button/button"

interface customerType {
    id: number;
    name: string;
    email: string;
    phone: string;
    mobile: string;
    Address: string
}

const Customers = () => {

    const { hidden } = useCheckUser()
    const { data } = useFetch("http://localhost:8000/customers")

    return (
        <>
            <Header />
            <div className="customers" hidden={hidden}>
                <h1>customers page</h1>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Date of birth</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {data.map((customer: customerType) => {
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.mobile}</td>
                                    <td>{customer.Address}</td>
                                    <td>
                                        <div className="btns">
                                            <Button
                                                label="Edit"
                                            />
                                            <Button
                                                label="Delete"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
};

export default memo(Customers);
