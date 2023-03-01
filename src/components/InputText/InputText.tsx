import { memo, useCallback } from "react";
import { InputTextProps } from "./interface";
import { useTranslation } from 'react-i18next';
import { Input, FormLabel, Flex } from '@chakra-ui/react'

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
    required = false
}: InputTextProps) => {
    const { t } = useTranslation()

    const handleChange = useCallback((event: { target: { value: string; }; }) => {
        onChange({ name: name, value: event.target.value })
    }, [name, onChange])

    return (
        <>
            <Flex
                direction="column"
                w={width}
                padding={padding}
                margin={margin}
            >
                <FormLabel>{t(Label)}</FormLabel>
                <Input
                    placeholder={placeHolder}
                    size='md'
                    isDisabled={disabled}
                    isRequired={required}
                    onChange={handleChange}
                    width="100%"
                    className={className}
                    value={value}
                    type={type}
                />
            </Flex>
            {/* <div className="mb-1 d-inline-block" style={{ width: width, margin: margin, padding: padding }}>
                <label htmlFor="exampleFormControlInput1" className={`form-label ${className}`} >{t(Label)}</label>
                <input type={type} className="form-control" id="exampleFormControlInput1" placeholder={placeHolder} disabled={disabled} onChange={handleChange} value={value} />
            </div> */}
        </>
    )
}

export default memo(InputText)