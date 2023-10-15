import React, { memo, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { FormLabel, Flex } from '@chakra-ui/react'
import { StyledInput } from "./styled"
import { InputTextProps } from "./interface";

const InputText = ({
    disabled,
    value,
    name,
    label = "",
    onChange,
    height = "65px",
    width = "200px",
    type = "text",
    placeHolder,
    padding,
    margin = "10px",
    className = "",
    required,
    ...props
}: InputTextProps) => {
    const { t } = useTranslation();

    const handleChange = useCallback((event: { target: { value: string; }; }) => {
        onChange({ name: name, value: event.target.value })
    }, [name, onChange]);

    return (
        <>
            <Flex
                direction="column"
                width={width}
                padding={padding}
                margin={margin}
                height={height}
            >
                <FormLabel>{t(label)}</FormLabel>
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
            </Flex>
        </>
    )
}

export default memo(InputText)