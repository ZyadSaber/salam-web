import React, { memo, useCallback } from "react";
import { useTranslation } from 'react-i18next'
import { Radio, RadioGroup, Stack, FormLabel, Flex } from '@chakra-ui/react'
import { radioBoxProps, option } from "./interface"

const RadioBox = ({
    name,
    options,
    width,
    onChange,
    value,
    label,
    margin = "10px",
    padding,
    hidden = false,
    disabled= false,
    ...props
}: radioBoxProps) => {
    const { t } = useTranslation()
    const handleChange = useCallback((value: string | number) => {
        onChange({ name: name, value: value })
    }, [name, onChange])
    return (
        <>
            <Flex
                direction="column"
                width={width}
                padding={padding}
                margin={margin}
                wrap="wrap"
                hidden={hidden}
            >
                <FormLabel fontSize='md' as="b" margin="0 0 5px">{t(label)}</FormLabel>
                <Flex
                    className="css-1xsh6d8"
                    width="100%"
                >
                    <RadioGroup
                        padding="7px"
                        onChange={handleChange}
                        value={value}
                        width="100%"
                        display="flex"
                        gap="15px"
                        flexWrap="wrap"
                        isDisabled={disabled}
                        {...props}
                    >
                        {options.map((option: option) => {
                            return (
                                <Stack direction='row'>
                                    <Radio value={option.value} >{t(option.label)}</Radio>
                                </Stack>
                            )
                        })}
                    </RadioGroup>
                </Flex>
            </Flex>
        </>
    )
}

export default memo(RadioBox)