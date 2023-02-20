import { memo, useCallback, useEffect } from 'react';
import './Style.css';
import Button from '../../components/button/button';
import InputText from '../../components/InputText/InputText';
import useFormManager from '../../hooks/useFormManager';
import usePost from '../../hooks/usePost';
import useLoacalStorage from '../../hooks/useLocalStorage';

const SignInPage = () => {

    const { setRow, success } = usePost({ link: "USER_LOG_IN" })
    const { state, onChange } = useFormManager({})
    const { authorization, changeLocalStorage } = useLoacalStorage()

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

    //@ts-ignore
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
                        <h1>Welcome </h1>
                        <p>Please Log In</p>
                        <InputText
                            name='user_name'
                            Label='User Name'
                            onChange={onChange}
                        />
                        <InputText
                            name='user_password'
                            Label='Password'
                            onChange={onChange}
                            type="password"
                        />
                        <Button
                            label='login'
                            onClick={handleLogIn}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default memo(SignInPage);