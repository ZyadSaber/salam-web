import React, { memo } from 'react';
import Button from "./button"
import { NavLink } from 'react-router-dom';
import { linkButtonProp } from "./interface";


const LinkButton = ({
    label = "",
    pathTo = "",
    ...props
}: linkButtonProp) => {

    console.log(pathTo)

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