import React, { memo, useState, useEffect, useCallback } from 'react';
import './style.css';
import useCheckUser from '../../hooks/useCheckUser'
//@ts-ignore
import { Link } from 'react-router-dom';

const Header = () => {
    const [btn, setBtn] = useState("");
    const { user, hidden } = useCheckUser()

    //@ts-ignore
    console.log(JSON.parse(localStorage.getItem('user')).username)

    useEffect(() => {
        if (!hidden) {
            //@ts-ignore i know
            setBtn("log Out")
        } else {
            setBtn("log in")
        }
    }, [hidden])

    console.log(hidden)

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
                        <li>
                            <label>Basic Data</label>
                            <ul>
                                <li><Link to="//">Suppliers</Link></li>
                                <li><Link to="//">Customers</Link></li>
                                <li><Link to="//">Items</Link></li>
                            </ul>
                        </li>
                        <li>
                            <label>Invoices</label>
                            <ul>
                                <li><Link to="//">Supplier invoices</Link></li>
                                <li><Link to="//">Customers invoices</Link></li>
                                <li><Link to="//">Invoices search</Link></li>
                            </ul>
                        </li>
                        <li>
                            <label>Employees</label>
                            <ul>
                                <li><Link to="//">Employee Attendance</Link></li>
                                <li><Link to="//">Employee leaving</Link></li>
                                <li><Link to="//">Employee Salary</Link></li>
                                <li><Link to="//">Employees Data</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Accounts Summary</a>
                            <ul>
                                <li><Link to="//">Customers Summary</Link></li>
                                <li><Link to="//">Suppliers Summary</Link></li>
                                <li><Link to="//">Items Summary</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Accounts Totals</a>
                            <ul>
                                <li><Link to="//">Daily Totals</Link></li>
                                <li><Link to="//">Monthly Totals</Link></li>
                                <li><Link to="//">Yearly Totals</Link></li>
                                <li><Link to="//">Expenses Totals</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="control">
                    <p>{user}</p>
                    <button onClick={handleLogButton}>{btn}</button>
                </div>

            </div>
        </>
    )
};

export default memo(Header);
