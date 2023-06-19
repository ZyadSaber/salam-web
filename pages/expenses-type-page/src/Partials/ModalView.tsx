import React, { memo } from 'react';
import { SaveButton } from "@commons/button";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
import { ModalViewProp } from "@commons/global";
import { useTableControlsButtons } from "@commons/table";

const ModalView = ({
    onClose,
    selectedRow,
    refreshTable
}: ModalViewProp) => {

    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_EXPENSES_TYPES_TABLE_DATA", runFetch: refreshTable })

    const { state, onChange } = useFormManager({ initialValues: selectedRow })
    const { expense_type_name, expense_type_note, query_status, expense_type_id } = state;

    const handleSave = () => {
        const record = {
            expense_type_name,
            expense_type_note,
            expense_type_id,
            query_status
        }
        onSaveAndInsertion(record)
        onClose()
    }

    return (
        <>
            <InputText
                name="expense_type_name"
                Label='expnsnm'
                width="100%"
                onChange={onChange}
                value={expense_type_name}
            />
            <InputText
                name="expense_type_note"
                Label='nts'
                width="100%"
                onChange={onChange}
                value={expense_type_note}
            />
            <SaveButton
                onOK={handleSave}
            />
        </>
    )
};

export default memo(ModalView)