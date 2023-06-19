import React, { memo } from 'react'

const BaseTitle = ({
    value,
    margin,
    padding,
    width = "",
    fontSize = "",
    color,
    backgroundColor
}: any) => {
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
                {value}
            </strong>
        </>
    )
}

export default memo(BaseTitle)