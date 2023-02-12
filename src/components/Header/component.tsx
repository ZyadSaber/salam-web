import { memo, useState, useEffect, useCallback } from 'react';
import './style.css';
import useCheckUser from '../../hooks/useCheckUser';
import useLoacalStorage from '../../hooks/useLocalStorage';
//@ts-ignore
import { Link } from 'react-router-dom';
import Button from "../button/button";

const Header = () => {
    const [btn, setBtn] = useState("");
    const { hidden } = useCheckUser()
    const { displayName } = useLoacalStorage()

    useEffect(() => {
        if (!hidden) {
            setBtn("log Out")
        } else {
            setBtn("log in")
        }
    }, [hidden])

    const handleLogButton = useCallback(() => {
        if (hidden) {
            window.location.assign("/")
        } else {
            window.location.assign("/")
            localStorage.removeItem('salam')
        }
    }, [hidden])

    return (
        <>
            <nav className="header navbar navbar-expand-lg nav nav2">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <Link to='/home'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <ul>
                                <li >
                                    <label>Basic Data</label>
                                    <ul >
                                        <li ><Link to="/suppliers">Suppliers</Link></li>
                                        <li ><Link to="/customers">Customers</Link></li>
                                        <li ><Link to="/items">Items</Link></li>
                                        <li ><Link to="/printOptions">Print Options</Link></li>
                                    </ul>
                                </li>
                                <li >
                                    <label>Invoices</label>
                                    <ul>
                                        <li ><Link to="/supplierInvoices">Supplier invoices</Link></li>
                                        <li ><Link to="/customerInvoices">Customers invoices</Link></li>
                                        <li ><Link to="/invoicesSearch">Invoices search</Link></li>
                                    </ul>
                                </li>
                                <li >
                                    <label>Employees</label>
                                    <ul>
                                        <li ><Link to="/employeeAttendance">Employee Attendance</Link></li>
                                        <li ><Link to="/employeeLeaving">Employee leaving</Link></li>
                                        <li ><Link to="/employeeSalary">Employee Salary</Link></li>
                                        <li ><Link to="/employeeData">Employees Data</Link></li>
                                    </ul>
                                </li>
                                <li >
                                    <label>Accounts Summary</label>
                                    <ul>
                                        <li ><Link to="/customersSummary">Customers Summary</Link></li>
                                        <li ><Link to="/suppliersSummary">Suppliers Summary</Link></li>
                                        <li ><Link to="/itemsSummary">Items Summary</Link></li>
                                    </ul>
                                </li>
                                <li >
                                    <label>Accounts Totals</label>
                                    <ul>
                                        <li ><Link to="/dailyTotals">Daily Totals</Link></li>
                                        <li ><Link to="/monthlyTotals">Monthly Totals</Link></li>
                                        <li ><Link to="/yearlyTotals">Yearly Totals</Link></li>
                                        <li ><Link to="/expensesTotals">Expenses Totals</Link></li>
                                    </ul>
                                </li>
                                <li >
                                    <label>Administration Control</label>
                                    <ul>
                                        <li><Link to="/users">Users</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className=' position-absolute ' style={{ right: "2%" }}>
                                <form className="d-flex ff" role="search">
                                    {displayName && <span className="navbar-brand mb-0 h1 ">{`Current User is ${displayName} `}</span>}
                                    <Button
                                        label={btn}
                                        onClick={handleLogButton}
                                        width="100%"
                                        height='100%'
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default memo(Header);
