import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

const BaseTitle = ({
    value,
    margin,
    padding,
    width = "",
    fontSize = "",
    color,
    backgroundColor
}: any) => {
    const { t } = useTranslation()
    return (
        <>
            <strong
                style={{
                    padding: padding,
                    margin: margin,
                    width: width,
                    fontSize: fontSize,
                    color: color,
                    backgroundColor: backgroundColor
                }}>
                {t(value)}
            </strong>
        </>
    )
}

export default memo(BaseTitle)