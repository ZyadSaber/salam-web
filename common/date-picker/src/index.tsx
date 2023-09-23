import React, { memo } from "react";
import { FormLabel, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { defaultDate } from "@commons/global";
import styled from '@emotion/styled';

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
}: any) => {

    const StyledDate=styled.input`
    background-color:transparent;
    height: 100%;
    width: 100%;
    border-radius: 7px;
    padding: 0 10px;
    border:  ${required ? `1px solid red` : `1px solid #54626F`};
    `
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
                {...props}
            />
        </Flex>
    )
}

export default memo(DatePicker)