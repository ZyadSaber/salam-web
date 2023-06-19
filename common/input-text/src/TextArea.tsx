import React, { memo, useCallback } from "react";
import { Textarea, FormLabel, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { TextAreaProps } from "./interface";

const TextArea = ({
    name,
    Label = "name",
    placeHolder,
    width = "30%",
    height = "100px",
    padding,
    margin = "10px",
    onChange,
    value,
    disabled,
}: TextAreaProps) => {
    const { t } = useTranslation()
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
                height={height}
            >
                <FormLabel>{t(Label)}</FormLabel>
                <Textarea
                    value={value}
                    onChange={handleChange}
                    placeholder={placeHolder}
                    isDisabled={disabled}
                    height="100%"
                />
            </Flex>
        </>
    )
}

export default memo(TextArea);