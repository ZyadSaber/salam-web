import React, { memo, useCallback } from 'react';
import { InputText } from "@commons/input-text";
import { useFormManager } from '@commons/hooks';
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
    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_SUPPLIER_TABLE_DATA", runFetch: refreshTable })
    const { supplier_id, supplier_name, email, phone, address, query_status } = state;

    const handleSave = useCallback(() => {
        const record = {
            supplier_name,
            email,
            phone,
            address,
            supplier_id,
            query_status
        }
        onSaveAndInsertion(record)
        onClose()
    }, [address, email, onClose, onSaveAndInsertion, phone, query_status, supplier_id, supplier_name])

    return (
        <>
            <InputText
                name="supplier_name"
                Label='Name'
                onChange={onChange}
                value={supplier_name}
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
                onOK={handleSave}
            />
        </>
    )
};

export default memo(ModalView)