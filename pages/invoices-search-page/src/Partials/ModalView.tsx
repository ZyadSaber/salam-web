import React, { memo, useCallback } from 'react';
import { SelectWithApi } from '@commons/select';
import InputNumber from "@commons/input-number"
import {InputText} from '@commons/input-text';
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
    
    return (
        <>
        <Flex width="100%">
            {state.invoice_type === "C" && 
            < SelectWithApi
            api='QUERY_PRINT_OPTIONS_LIST'
            name='invoice_print_option_id'
            value={state.invoice_print_option_id}
            onChange={onChange}
            label='prntnm'
            />
            }
             < SelectWithApi
            api='QUERY_ITEMS_LIST'
            name='invoice_item_id'
            value={state.invoice_item_id}
            onChange={onChange}
            label='itmnm'
            />
            <InputNumber 
            name='width'
            value={state.width}
            onChange={onChange}
            min={0}
            label='wdth'
            />
            <InputNumber 
            name='height'
            value={state.height}
            onChange={onChange}
            min={0}
            label='hght'
            />
            <InputNumber 
            name='size'
            value={state.size}
            onChange={onChange}
            min={0}
            disabled
            label='sz'
            />
             <InputNumber 
            name='quantity'
            value={state.quantity}
            onChange={onChange}
            min={0}
            label='qty'
            />
            <InputNumber 
            name='price'
            value={state.price}
            onChange={onChange}
            min={0}
            label='prc'
            />
             <InputNumber 
            name='total'
            value={state.total}
            onChange={onChange}
            min={0}
            disabled
            label='total'
            />
            <InputText 
            name='notes'
            value={state.notes}
            onChange={onChange}
            disabled
            label='nts'
            />
            </Flex>
            <SaveButton
                onClick={handleValidateFelids}
                width='20%'
            />
        </>
    )
};

export default memo(ModalView)