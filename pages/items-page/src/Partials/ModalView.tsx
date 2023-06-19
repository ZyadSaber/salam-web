import React, { memo, useCallback } from 'react';
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
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
    const { item_id, item_name, item_unit, item_description, query_status } = state

    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_ITEMS_TABLE_DATA", runFetch: refreshTable })

    const handleSave = useCallback(() => {
        const record = {
            item_id,
            item_name,
            item_unit,
            item_description,
            query_status
        }
        onSaveAndInsertion(record)
        onClose()
    }, [item_description, item_id, item_name, item_unit, onClose, onSaveAndInsertion, query_status])

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
                onOK={handleSave}
            />
        </>
    )
};

export default memo(ModalView)