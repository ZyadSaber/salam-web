import React, { memo } from 'react';
import { SaveButton } from "@commons/button";
import { InputText } from "@commons/input-text";
import { useFormManager, useValidateForm } from "@commons/hooks";
import { ModalViewProp } from "@commons/global";
import { useTableControlsButtons } from "@commons/table";

const ModalView = ({
    onClose,
    selectedRow,
    refreshTable
}: ModalViewProp) => {

    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_EXPENSES_TYPES_TABLE_DATA", runFetch: refreshTable })

    const { state, onChange } = useFormManager({ initialValues: selectedRow })

    const handleSave = () => {
        onSaveAndInsertion(state)
        onClose()
    }

    const handleValidateFelids = useValidateForm({
        validateFelids:["expense_type_name"],
        functionToRun:handleSave,
        stateToValidate:state
    })

    const { expense_type_name, expense_type_note } = state;

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
                onOK={handleValidateFelids}
            />
        </>
    )
};

export default memo(ModalView)