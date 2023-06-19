import React, { memo, useCallback } from "react";
import {
    NumberInput,
    NumberInputField,
    // NumberInputStepper,
    // NumberIncrementStepper,
    // NumberDecrementStepper,
    Flex,
    FormLabel
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { inputNumberProp } from "./interface";

const InputNumber = ({
    disabled,
    value,
    name = "number",
    Label = "",
    onChange,
    width = "200px",
    padding,
    margin = "10px",
    step = 1,
    min = 0,
    max
}: inputNumberProp) => {
    const { t } = useTranslation()

    const handleChange = useCallback((event: { target: { value: number; }; }) => {
        onChange({ name: name, value: +event.target.value })
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
                <NumberInput step={step} min={min} max={max} isDisabled={disabled} value={value | 0}>
                    {
                        //@ts-ignore
                        <NumberInputField onChange={handleChange} />
                    }
                    {/* <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper> */}
                </NumberInput>
            </Flex>
        </>
    )
}

export default memo(InputNumber)