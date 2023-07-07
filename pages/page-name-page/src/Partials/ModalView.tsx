import React, { memo, useCallback } from 'react';
import { InputText } from "@commons/input-text";
import { useFormManager } from '@commons/hooks';
import { ModalViewProp } from "@commons/global"
import { useTableControlsButtons } from "@commons/table";
import { Button } from "@commons/button";
import { CheckBox } from "@commons/check-box"

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
    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_PAGE_NAME_MAIN_TABLE", runFetch: refreshTable })

    const handleSave = useCallback(() => {
        onSaveAndInsertion(state)
        onClose()
    }, [onSaveAndInsertion, state, onClose])

    return (
        <>
            <InputText
                name="page_name"
                Label='page_name'
                onChange={onChange}
                value={state.page_name}
                width="47%"
            />
            <InputText
                name="page_link"
                Label='page_link'
                onChange={onChange}
                value={state.page_link}
                width="47%"
            />
            <CheckBox
                name="page_disabled"
                label='page_disabled'
                onChange={onChange}
                value={state.page_disabled}
                width="47%"
            />
            <CheckBox
                name="run_in_modal"
                label='run_in_modal'
                onChange={onChange}
                value={state.run_in_modal}
                width="47%"
            />
            <InputText
                name="parent_name"
                Label='parent_name'
                onChange={onChange}
                value={state.parent_name}
                width="47%"
            />

            <Button
                onClick={handleSave}
                label="sv"
            />
        </>
    )
};

export default memo(ModalView)