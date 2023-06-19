import React, { memo } from 'react';
import { InputText } from "@commons/input-text";
import { useFormManager } from '@commons/hooks';
import { ModalViewProp } from "@commons/global"
import { useTableControlsButtons } from "@commons/table";
import { SaveButton } from "@commons/button";

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
    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_PRINT_OPTIONS_TABLE_DATA", runFetch: refreshTable })
    const { print_option_name, print_option_note, print_option_id, query_status } = state;

    const handleSave = () => {
        const record = {
            print_option_name,
            print_option_note,
            print_option_id,
            query_status
        }
        onSaveAndInsertion(record)
        onClose()
    }

    return (
        <>
            <InputText
                name="print_option_name"
                Label='print_option_name'
                onChange={onChange}
                value={print_option_name}
                width="100%"
            />
            <InputText
                name="print_option_note"
                Label='print_option_note'
                onChange={onChange}
                value={print_option_note}
                width="100%"
            />
            <SaveButton
                onOK={handleSave}
            />
        </>
    )
};

export default memo(ModalView)