import React, { memo } from "react";
import { useTranslation } from 'react-i18next';
import { FormLabel, Flex } from '@chakra-ui/react';
import { StyledSelect, StyledOption } from "./styled"
import { SelectProps } from "./interface";

const Select = ({
    height = "65px",
    width = "200px",
    Options,
    onChange,
    Label,
    value = 0,
    name,
    withLabel = false,
    margin = "10px",
    padding,
    placeholder = "Select",
    selectLabelName = "label_select",
}: SelectProps) => {
    const { t } = useTranslation()
    //@ts-ignore
    const handleValue = (event) => {
        if (Array.isArray(Options)) {
            Options.map((option) => {
                if (option.value === +event.target.value) {
                    if (withLabel) {
                        onChange({ value: option.value, selectLabelName: selectLabelName, label: option.label, name: name })
                    } else {
                        onChange({ value: option.value, name: name })
                    }
                }
            })
        }
    }

    return (
        <>
            <Flex
                direction="column"
                width={width}
                padding={padding}
                margin={margin}
                height={height}
            >
                <FormLabel fontSize='md' as="b" margin="0 0 5px">{t(Label)}</FormLabel>
                <StyledSelect
                    placeholder={t(placeholder)}
                    onChange={handleValue}
                >
                    {Array.isArray(Options) && Options.length !== 0 ? Options.map((Option) => {
                        return (
                            <StyledOption key={Option.value} value={Option.value} selected={value === Option.value && true}> {t(Option.label)}</StyledOption>
                        )
                    }) : <StyledOption disabled>{t("No data")}</StyledOption>}
                </StyledSelect>
            </Flex>
        </>
    )
}

export default memo(Select)