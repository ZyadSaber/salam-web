import React, { memo, useCallback } from 'react';
import { InputText } from "@commons/input-text";
import { useFormManager, useValidateForm } from '@commons/hooks';
import { ModalViewProp } from "@commons/global"
import { useTableControlsButtons } from "@commons/table";
import { SaveButton } from "@commons/button"
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
        });

    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_SUPPLIER_TABLE_DATA", runFetch: refreshTable })

    const handleSave = useCallback(() => {
        onSaveAndInsertion(state)
        onClose()
    }, [onClose, onSaveAndInsertion, state])

    const handleValidateFelids = useValidateForm({
        validateFelids:["supplier_name"],
        functionToRun:handleSave,
        stateToValidate:state
    })

    const { supplier_name, email, phone, address } = state;

    return (
        <Flex width='100%' wrap gap='10px'>
            <InputText
                name="supplier_name"
                label='Name'
                onChange={onChange}
                value={supplier_name}
                width="49%"
            />
            <InputText
                name="email"
                label='Email'
                onChange={onChange}
                value={email}
                width="49%"
            />
            <InputText
                name="phone"
                label='Phone'
                onChange={onChange}
                value={phone}
                width="49%"
            />
            <InputText
                name="address"
                label='Address'
                onChange={onChange}
                value={address}
                width="49%"
            />
            <SaveButton
                onOK={handleValidateFelids}
                width='20%'
            />
        </Flex>
    )
};

export default memo(ModalView)