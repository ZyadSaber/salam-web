import { memo, useState, useEffect, useCallback } from 'react';
import './style.css';
import useCheckUser from '../../hooks/useCheckUser';
import useLoacalStorage from '../../hooks/useLocalStorage';
//@ts-ignore
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../button/button';
import Flex from '../Flex/Flex';
import Text from "../pageTitle/text"

const Header = () => {
    const [btn, setBtn] = useState("");
    const { hidden } = useCheckUser()
    const { t } = useTranslation()
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

            <nav className="navbar" style={{ backgroundColor: "#7ebdc2" }}>
                <Flex margin='0' padding='5px 100px' width='100%' justifyContent='space-between'>
                    <NavLink to='/home' className="navbar-brand">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{ margin: "0 10px" }} />
                        {t("aptl")}
                    </NavLink>
                    <Text title='Al Salam Company For Advertising and Marketing' padding="0" margin='0 0 0 10%' />
                    <Flex padding='0 0 0 0' margin='0' width='20%'>
                        {displayName && <span className="navbar-brand mb-0 h1 ">{`Current User is ${displayName} `}</span>}
                        <Button
                            label={btn}
                            onClick={handleLogButton}
                            width='100%'
                            padding='0'
                        />
                    </Flex>
                </Flex>
            </nav >
        </>
    )
};

export default memo(Header);