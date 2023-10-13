import React, { memo, useCallback } from 'react';
import { InputText } from "@commons/input-text";
import { useFormManager,useValidateForm } from "@commons/hooks";
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
    } = useFormManager({
            initialValues: {
                ...selectedRow
            }
        })
        
        const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_ITEMS_TABLE_DATA", runFetch: refreshTable })
        
        const handleSave = useCallback(() => {
            onSaveAndInsertion(state)
            onClose()
        }, [onClose, onSaveAndInsertion, state])
        const handleValidateFelids = useValidateForm({
            validateFelids:["item_name", "item_unit"],
            functionToRun:handleSave,
            stateToValidate:state
        })
        const { item_name, item_unit, item_description } = state
    return (
        <>
            <InputText
                name="item_name"
                Label='Name'
                onChange={onChange}
                value={item_name}
            />
            <InputText
                name="item_unit"
                Label='Unit'
                onChange={onChange}
                value={item_unit}
            />
            <InputText
                name="item_description"
                Label='nts'
                onChange={onChange}
                value={item_description}
            />
            <SaveButton
                onOK={handleValidateFelids}
            />
        </>
    )
};

export default memo(ModalView)