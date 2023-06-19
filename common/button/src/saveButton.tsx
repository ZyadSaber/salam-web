import React, { memo } from "react";
import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { saveButtonProp } from "./interface"

const SaveButton = ({
    saveTitle = 'sv',
    onOK,
    disabled,
    width = "10%",
    margin = "5px",
    padding,
}: saveButtonProp) => {
    const { t } = useTranslation()
    return (
        <>
            <Button colorScheme='blue' onClick={onOK} disabled={disabled} style={{
                width: width,
                margin: margin,
                padding: padding
            }} >{t(saveTitle)}</Button>
        </>
    )
}

export default memo(SaveButton)