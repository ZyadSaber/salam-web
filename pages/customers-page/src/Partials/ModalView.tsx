import React, { memo, useCallback } from 'react';
import { InputText } from "@commons/input-text";
import { useFormManager, useValidateForm } from '@commons/hooks';
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
    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_CUSTOMER_TABLE_DATA", runFetch: refreshTable })
    
    const handleSave = useCallback(() => {
        onSaveAndInsertion(state)
        onClose()
    }, [onClose, onSaveAndInsertion, state])
    
    const handleValidateFelids = useValidateForm({
        validateFelids:["customer_name"],
        functionToRun:handleSave,
        stateToValidate:state
    })

    const { customer_name, email, phone, address } = state;
    
    return (
        <>
            <InputText
                name="customer_name"
                Label='Name'
                onChange={onChange}
                value={customer_name}
                width="47%"
            />
            <InputText
                name="email"
                Label='Email'
                onChange={onChange}
                value={email}
                width="47%"
            />
            <InputText
                name="phone"
                Label='Phone'
                onChange={onChange}
                value={phone}
                width="47%"
            />
            <InputText
                name="address"
                Label='Address'
                onChange={onChange}
                value={address}
                width="100%"
            />
            <SaveButton
                onClick={handleValidateFelids}
            />
        </>
    )
};

export default memo(ModalView)