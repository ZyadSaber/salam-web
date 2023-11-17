import React, { memo } from 'react';
import { InputText } from "@commons/input-text";
import { useFormManager, useValidateForm } from '@commons/hooks';
import { ModalViewProp } from "@commons/global"
import { useTableControlsButtons } from "@commons/table";
import { SaveButton } from "@commons/button";
import Flex from "@commons/flex"

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
    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_PRINT_OPTIONS_TABLE_DATA", runFetch: refreshTable })

    const handleSave = () => {
        onSaveAndInsertion(state)
        onClose()
    }

    const handleValidateFelids = useValidateForm({
        validateFelids:["print_option_name"],
        functionToRun:handleSave,
        stateToValidate:state
    })

    const { print_option_name, print_option_note } = state;

    return (
        <Flex width='100%' wrap gap='10px'>
            <InputText
                name="print_option_name"
                label='prntnm'
                onChange={onChange}
                value={print_option_name}
                width="39%"
            />
            <InputText
                name="print_option_note"
                label='nts'
                onChange={onChange}
                value={print_option_note}
                width="39%"
            />
            <SaveButton
                onOK={handleValidateFelids}
                width='19%'
            />
        </Flex>
    )
};

export default memo(ModalView)