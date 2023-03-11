import { memo } from 'react';
import { linkButtonProp } from "./interface";
import { useTranslation } from 'react-i18next';
//@ts-ignore
import { NavLink } from 'react-router-dom';

const LinkButton = ({
    label = "",
    className = "",
    hidden,
    margin,
    width,
    height,
    padding,
    pathTo = ""
}: linkButtonProp) => {
    const { t } = useTranslation()
    return (
        <>
            <div style={{
                width: width,
                height: height,
                padding: padding,
                margin: margin,
                display: "inline-block"
            }}
                hidden={hidden}
            >
                <NavLink className={`btn btn-primary w-100 ${className}`} to={`/${pathTo}`} >{t(label)}</NavLink>
            </div>
        </>
    )
}

export default memo(LinkButton)