import React, { memo, useCallback } from "react";
import { FormLabel, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { StyledInput } from "./styled"
import { inputNumberProp } from "./interface";

const InputNumber = ({
    disabled,
    value,
    name,
    Label = "",
    onChange,
    height = "65px",
    width = "200px",
    padding,
    margin = "10px",
    ...props
}: inputNumberProp) => {

    const { t } = useTranslation();

    const handleChange = useCallback((event: { target: { value: string; }; }) => {
        onChange({ name: name, value: +event.target.value })
    }, [name, onChange]);

    return (

        <Flex
                direction="column"
                width={width}
                padding={padding}
                margin={margin}
                height={height}
            >
                <FormLabel>{t(Label)}</FormLabel>
                <StyledInput
                    disabled={disabled}
                    onChange={handleChange}
                    width="100%"
                    value={value}
                    type = "number"
                    {...props}
                />
            </Flex>
    )
}

export default memo(InputNumber)