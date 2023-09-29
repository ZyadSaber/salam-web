import React, { memo } from "react";
import { InputText } from "@commons/input-text"
import { inputNumberProp } from "./interface";

const InputNumber = ({
    disabled,
    value,
    name = "number",
    Label = "",
    onChange,
    height,
    width = "200px",
    padding,
    margin = "10px",
    min = 0,
    max,
    ...prop
}: inputNumberProp) => {
    return (

        < InputText
            type="number"
            margin={margin}
            padding={padding}
            width={width}
            height={height}
            onChange={onChange}
            Label={Label}
            value={value}
            disabled={disabled}
            name={name}
            min={min}
            max={max}
            {...prop}
        />
    )
}

export default memo(InputNumber)