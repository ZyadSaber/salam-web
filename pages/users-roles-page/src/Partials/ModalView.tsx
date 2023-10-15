import React, { memo, useCallback } from 'react';
import { InputText } from "@commons/input-text";
import { useFormManager } from '@commons/hooks';
import { ModalViewProp } from "@commons/global"
import { SelectWithApi } from '@commons/select/src';
import { useTableControlsButtons } from "@commons/table";
import { Button } from "@commons/button"

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
    const { onSaveAndInsertion } = useTableControlsButtons({ api: "POST_CUSTOMER_TABLE_DATA", runFetch: refreshTable })
    const { customer_id, password, confirm_password, user_name, first_name, last_name, user_role, query_status } = state;

    const handleSave = useCallback(() => {
        const record = {
            user_name,
            first_name,
            last_name,
            user_role,
            customer_id,
            query_status,
            password,
            confirm_password
        }
        onSaveAndInsertion(record)
        onClose()
    }, [user_name, first_name, last_name, user_role, customer_id, query_status, password, confirm_password, onSaveAndInsertion, onClose])

    return (
        <>
            <InputText
                name="user_name"
                label='user_name'
                onChange={onChange}
                value={user_name}
                width="47%"
            />
            <InputText
                name="first_name"
                label='first_name'
                onChange={onChange}
                value={first_name}
                width="47%"
            />
            <InputText
                name="last_name"
                label='last_name'
                onChange={onChange}
                value={last_name}
                width="47%"
            />
            <SelectWithApi
                Api=""
                name="user_role"
                label='user_role'
                onChange={onChange}
                value={user_role}
                width="47%"
            />
            <InputText
                name="password"
                label='password'
                onChange={onChange}
                value={password}
                width="47%"
                type='password'
            />
            <InputText
                name="confirm_password"
                label='confirm_password'
                onChange={onChange}
                value={confirm_password}
                width="47%"
                type='password'
            />
            <Button
                onClick={handleSave}
                label="sv"
            />
        </>
    )
};

export default memo(ModalView)