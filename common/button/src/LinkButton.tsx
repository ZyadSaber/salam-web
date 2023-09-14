import React, { memo } from 'react';
import Button from "./button"
//@ts-ignore
import { NavLink } from 'react-router-dom';
import { linkButtonProp } from "./interface";


const LinkButton = ({
    label = "",
    pathTo = "",
    ...props
}: linkButtonProp) => {

    return (
        <>
            <NavLink to={`/${pathTo}`} style={{ textDecoration: "none", width: "100%" }}>
                <Button
                    label={label}
                    {...props}
                />
            </NavLink>
        </>
    )
}

export default memo(LinkButton)