import React, { memo, useCallback } from "react";
import FloatingLabel from "@commons/floating-label"
import { StyledInput } from "./styled"
import { InputTextProps } from "./interface";

const InputText = ({
    disabled,
    value,
    name,
    label = "",
    onChange,
    height,
    width = "200px",
    type = "text",
    placeHolder,
    padding,
    margin,
    className,
    required,
    ...props
}: InputTextProps) => {

    const handleChange = useCallback((event: { target: { value: string; }; }) => {
        onChange({ name: name, value: event.target.value })
    }, [name, onChange]);

    return (
        <>
            <FloatingLabel
                label={label}
                hasContent={value && value.toString()}
                margin={margin}
                padding={padding}
                height={height}
                width={width}
            >
                <StyledInput
                    placeholder={placeHolder}
                    disabled={disabled}
                    required={required}
                    onChange={handleChange}
                    width="100%"
                    className={className}
                    value={value}
                    type={type}
                    {...props}
                />
            </FloatingLabel>
        </>
    )
}

export default memo(InputText)