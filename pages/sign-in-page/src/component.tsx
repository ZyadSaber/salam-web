import React, { memo, useCallback, useEffect } from 'react';
import './Style.css';
import { Button } from "@commons/button";
import { InputText } from "@commons/input-text";
import { useLocalStorage, usePost, useFormManager } from "@commons/hooks"

const SignInPage = () => {

    const { setRow, success } = usePost({ link: "USER_LOG_IN", noAuthorization: true })
    const { state, onChange } = useFormManager({})
    const { authorization, changeLocalStorage } = useLocalStorage()

    if (success) {
        changeLocalStorage([
            {
                name: "salam",
                //@ts-ignore
                data: { authorization: success.authorization, display_name: success.display_name }
            }
        ])
    }

    useEffect(() => {
        if (authorization) {
            window.location.assign("/home")
        }
    }, [authorization])

    // @ts-ignore
    if (success && success.response === "success") {
        window.location.assign("/home")
    }

    const handleLogIn = useCallback(() => {
        setRow(state)

    }, [setRow, state])

    return (
        <>
            <div className="sign_in">
                <div className="card">
                    <div className="card-body">
                        <h1>مرحبا</h1>
                        <p>قم بتسجيل الدخول الى النظام</p>
                        <InputText
                            name='user_name'
                            Label='usrnm'
                            onChange={onChange}
                            width="90%"
                        />
                        <InputText
                            name='user_password'
                            Label='pswrd'
                            onChange={onChange}
                            type="password"
                            width="90%"
                        />
                        <Button
                            label='login'
                            onClick={handleLogIn}
                            width='40%'
                            margin='10px'
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default memo(SignInPage);