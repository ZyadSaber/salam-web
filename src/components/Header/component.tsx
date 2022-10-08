import React, { memo, useState, useEffect, useCallback } from 'react';
import './style.css';
import useCheckUser from '../../hooks/useCheckUser'
//@ts-ignore
import { Link } from 'react-router-dom';
import Button from "../button/button";

const Header = () => {
    const [btn, setBtn] = useState("");
    const { user, hidden, role } = useCheckUser()

    useEffect(() => {
        if (!hidden) {
            setBtn("log Out")
        } else {
            setBtn("log in")
        }
    }, [hidden])

    console.log(role)
    console.log(role.basicData.hidden)


    const handleLogButton = useCallback(() => {
        if (hidden) {
            window.location.assign("/")
        } else {
            window.location.assign("/")
            localStorage.removeItem('user')
        }
    }, [hidden])


    return (
        <>
            <div className="header">
                <nav className="nav nav2">
                    <ul>
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li hidden={role.basicData.hidden}>
                            <label>Basic Data</label>
                            <ul>
                                <li hidden={role.basicData.suppliers}><Link to="/suppliers">Suppliers</Link></li>
                                <li hidden={role.basicData.customers}><Link to="/customers">Customers</Link></li>
                                <li hidden={role.basicData.items}><Link to="/items">Items</Link></li>
                            </ul>
                        </li>
                        <li hidden={role.invoices.hidden}>
                            <label>Invoices</label>
                            <ul>
                                <li hidden={role.invoices.supplierInvoices}><Link to="/supplierInvoices">Supplier invoices</Link></li>
                                <li hidden={role.invoices.customerInvoices}><Link to="/customerInvoices">Customers invoices</Link></li>
                                <li hidden={role.invoices.invoicesSearch}><Link to="/invoicesSearch">Invoices search</Link></li>
                            </ul>
                        </li>
                        <li hidden={role.employees.hidden}>
                            <label>Employees</label>
                            <ul>
                                <li hidden={role.employees.employeeAttendance}><Link to="/employeeAttendance">Employee Attendance</Link></li>
                                <li hidden={role.employees.employeeLeaving}><Link to="/employeeLeaving">Employee leaving</Link></li>
                                <li hidden={role.employees.employeeSalary}><Link to="/employeeSalary">Employee Salary</Link></li>
                                <li hidden={role.employees.employeeData}><Link to="/employeeData">Employees Data</Link></li>
                            </ul>
                        </li>
                        <li hidden={role.accountSummary.hidden}>
                            <label>Accounts Summary</label>
                            <ul>
                                <li hidden={role.accountSummary.customersSummary}><Link to="/customersSummary">Customers Summary</Link></li>
                                <li hidden={role.accountSummary.suppliersSummary}><Link to="/suppliersSummary">Suppliers Summary</Link></li>
                                <li hidden={role.accountSummary.itemsSummary}><Link to="/itemsSummary">Items Summary</Link></li>
                            </ul>
                        </li>
                        <li hidden={role.accountTotals.hidden}>
                            <label>Accounts Totals</label>
                            <ul>
                                <li hidden={role.accountTotals.dailyTotals}><Link to="/dailyTotals">Daily Totals</Link></li>
                                <li hidden={role.accountTotals.monthlyTotals}><Link to="/monthlyTotals">Monthly Totals</Link></li>
                                <li hidden={role.accountTotals.yearlyTotals}><Link to="/yearlyTotals">Yearly Totals</Link></li>
                                <li hidden={role.accountTotals.expensesTotals}><Link to="/expensesTotals">Expenses Totals</Link></li>
                            </ul>
                        </li>
                        <li hidden={role.administration.hidden}>
                            <label>Administration Control</label>
                            <ul>
                                <li hidden={role.administration.users}><Link to="/users">Users</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="control">
                    <p>{user}</p>
                    <Button
                        label={btn}
                        onClick={handleLogButton}
                    />
                </div>

            </div>
        </>
    )
};

export default memo(Header);
