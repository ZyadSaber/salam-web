import React, { memo, useCallback } from 'react';
import { InputText } from "@commons/input-text";
import { useFormManager } from '@commons/hooks';
import { ModalViewProp } from "@commons/global"
import { useTableControlsButtons } from "@commons/table";
import { SaveButton } from "@commons/button";
import { CheckBox } from "@commons/check-box";
import { Flex } from '@chakra-ui/react';

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

    console.log(state.page_name)

    return (
        <Flex margin={0} padding={0} gap={0} direction="column" width="100%"> 
        <Flex width="100%">
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
            </Flex>
                <Flex width="100%">
                <InputText
                    name="parent_name"
                    Label='parent_name'
                    onChange={onChange}
                    value={state.parent_name}
                    width="47%"
                />
            <CheckBox
                name="page_disabled"
                label='page_disabled'
                onChange={onChange}
                value={state.page_disabled}
            />
            <CheckBox
                name="run_in_modal"
                label='run_in_modal'
                onChange={onChange}
                value={state.run_in_modal}
            />
            </Flex>
            <SaveButton
                onClick={handleSave}
            />

        </Flex>
    )
};

export default memo(ModalView)