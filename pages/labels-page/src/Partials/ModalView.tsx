import React, { memo, useCallback } from 'react';
import { InputText } from "@commons/input-text";
import { useFormManager } from '@commons/hooks';
import { ModalViewProp } from "@commons/global"
import { useTableControlsButtons } from "@commons/table";
import { SaveButton } from "@commons/button"

const ModalView = ({
    onClose,
    selectedRow,
    refreshTable
}: ModalViewProp) => {
    const {
        state,
        onChange,
    }
        = useFormManager({
            initialValues: {
                ...selectedRow
            }
        })
    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_LABELS_TABLE_DATA", runFetch: refreshTable })
    const { language_code, english_name, arabic_name, query_status } = state;

    const handleSave = useCallback(() => {
        const record = {
            language_code,
            english_name,
            arabic_name,
            query_status
        }
        onSaveAndInsertion(record)
        onClose()
    }, [language_code, english_name, arabic_name, query_status, onSaveAndInsertion, onClose])

    return (
        <>
            <InputText
                name="language_code"
                Label='language_code'
                onChange={onChange}
                value={language_code}
                width="50%"
                disabled={query_status === "u"}
            />
            <InputText
                name="english_name"
                Label='english_name'
                onChange={onChange}
                value={english_name}
                width="47%"
            />
            <InputText
                name="arabic_name"
                Label='arabic_name'
                onChange={onChange}
                value={arabic_name}
                width="47%"
            />
            <SaveButton
                onClick={handleSave}
            />
        </>
    )
};

export default memo(ModalView)