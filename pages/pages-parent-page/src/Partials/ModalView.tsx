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
    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_PAGES_PARENT_DATA_TABLE", runFetch: refreshTable })

    const handleSave = useCallback(() => {
        onSaveAndInsertion(state)
        onClose()
    }, [onSaveAndInsertion, state, onClose])

    console.log(state.page_name)

    return (
        <Flex margin={0} padding={0} gap={0} direction="column" width="100%"> 
        <Flex width="100%">
            <InputText
                name="page_parent_id"
                Label='page_parent_id'
                onChange={onChange}
                value={state.page_parent_id}
                width="20%"
                disabled
            />
            <InputText
                name="page_parent_name"
                Label='page_parent_name'
                onChange={onChange}
                value={state.page_parent_name}
                width="60%"
            />
            <CheckBox
                name="hidden"
                label='hidden'
                onChange={onChange}
                value={state.hidden}
            />
            </Flex>
            <SaveButton
                onClick={handleSave}
            />
        </Flex>
    )
};

export default memo(ModalView)