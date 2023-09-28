import React, { memo, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { FormLabel, Flex } from '@chakra-ui/react'
import {StyledInput} from "./styled"
import { InputTextProps } from "./interface";

const InputText = ({
    disabled,
    value,
    name,
    Label = "",
    onChange,
    height ="65px",
    width = "200px",
    type = "text",
    placeHolder,
    padding,
    margin = "10px",
    className = "",
    required,
    ...props
}: any) => {
    const { t } = useTranslation();

    // const StyledInput = styled.input`
    // background-color: ${disabled ? "#e9e9e9" : "#fdfdfd"};
    // height: 100%;
    // width: 100%;
    // border-radius: 7px;
    // padding: 0 16px;
    // border:  ${required ? `0.5px solid red` : `0.5px solid #cbd5e0`};
    // `

    const handleChange = useCallback((event: { target: { value: string; }; }) => {
        onChange({ name: name, value: event.target.value })
        console.log(value)
    }, [name, onChange, value]);

    return (
        <>
            <Flex
                direction="column"
                width={width}
                padding={padding}
                margin={margin}
                height={height}
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