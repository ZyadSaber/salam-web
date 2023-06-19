import React, { memo } from "react";
import { useTranslation } from 'react-i18next';
import { Select as ChakraSelect, FormLabel, Flex } from '@chakra-ui/react';
import { SelectProps } from "./interface";

const Select = ({
    width = "200px",
    Options = [{
        label: "",
        value: 0
    }],
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
            >
                <FormLabel fontSize='md' as="b" margin="0 0 5px">{t(Label)}</FormLabel>
                <ChakraSelect
                    placeholder={t(placeholder)}
                    onChange={handleValue}
                >
                    {Array.isArray(Options) ? Options.map((Option) => {
                        return (
                            <option key={Option.value} value={Option.value} selected={value === Option.value && true}> {t(Option.label)}</option>
                        )
                    }) : <option disabled>{t("No data")}</option>}
                </ChakraSelect>
            </Flex>
        </>
    )
}

export default memo(Select)