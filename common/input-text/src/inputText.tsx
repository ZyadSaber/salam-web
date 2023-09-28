import React, { memo, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { FormLabel, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled';
import { InputTextProps } from "./interface";

const InputText = ({
    disabled,
    value,
    name,
    Label = "",
    onChange,
    width = "200px",
    type = "text",
    placeHolder,
    padding,
    margin = "10px",
    className = "",
    required = false,
    ...props
}: InputTextProps) => {
    const { t } = useTranslation();

    const StyledInput = styled.input`
    background-color:transparent;
    height: 100%;
    width: 100%;
    border-radius: 7px;
    padding: 0 10px;
    border:  ${required ? `1px solid red` : `1px solid #54626F`};
    `

    const handleChange = useCallback((event: { target: { value: string; }; }) => {
        onChange({ name: name, value: event.target.value })
    }, [name, onChange])

    return (
        <>
            <Flex
                direction="column"
                width={width}
                padding={padding}
                margin={margin}
            >
                <FormLabel>{t(Label)}</FormLabel>
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