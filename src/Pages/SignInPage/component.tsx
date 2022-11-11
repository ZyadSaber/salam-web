import React, { memo, useState, useCallback, useEffect } from 'react';
import './Style.css';
import useCheckUser from './useCheckUser';

const SignInPage = () => {

    const [userName, setUserName] = useState("");
    const [pasword, setPassword] = useState("")
    const { authorization } = useCheckUser(userName, pasword)

    const changeUserName = useCallback((event: { target: { value: string } }) => {
        setUserName(event.target.value);
    }, []);
    const changePassword = useCallback((event: { target: { value: string } }) => {
        setPassword(event.target.value);
    }, [])

    const handleLogIn = () => {
        if (authorization) window.location.assign("http://localhost:3000/home")
    }

    const handleLogOut = () => {
        window.close()
    }



    return (
        <>
            <div className="sign_in">
                <div className="card">
                    <div className="card-body">
                        <h1>Welcome ...</h1>
                        <input type="text" placeholder="User Name" value={userName} onChange={changeUserName} />
                        <input type="password" placeholder="Password" value={pasword} onChange={changePassword} />
                        <div className="btns">
                            <button onClick={handleLogIn}>Log In</button>
                            <button onClick={handleLogOut}>Exit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default memo(SignInPage);
