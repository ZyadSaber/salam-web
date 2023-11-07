import React, { memo, useCallback } from "react";
import { FormLabel, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { defaultDate } from "@commons/global";
import { StyledDate } from "./styled"
import { DatePickerProps } from "./interface"

const DatePicker = ({
    label,
    value,
    width = "200px",
    padding,
    margin = "10px",
    name,
    onChange,
    required = false,
    ...props
}: DatePickerProps) => {

    const handleChange = useCallback((event: { target: { value: string; }; }) => {
        onChange({ name: name, value: event.target.value })
    }, [name, onChange]);

    const { t } = useTranslation()
    return (
        <Flex
            direction="column"
            width={width}
            padding={padding}
            margin={margin}
        >
            <FormLabel>{t(label)}</FormLabel>
            <StyledDate
                type="date"
                value={value !== "" ? value : defaultDate}
                onChange={handleChange}
                {...props}
            />
        </Flex>
    )
}

export default memo(DatePicker)
export * from "./interface"