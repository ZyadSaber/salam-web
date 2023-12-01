import React, { memo } from 'react';
import IconButton from "./iconButton"
import { NavLink } from 'react-router-dom';
import { linkButtonProp } from "./interface";


const LinkButton = ({
    label,
    pathTo,
    iconName,
    ...props
}: linkButtonProp) => {

    return (
        <>
            <NavLink to={`/${pathTo}`} style={{ textDecoration: "none", width: "100%", background: "none" }}>
                <IconButton
                    label={label}
                    iconName={iconName}
                    borderRadius={undefined}
                    {...props}
                />
            </NavLink>
        </>
    )
}

export default memo(LinkButton)