import React, { memo, useCallback } from "react";
import Modal from "@commons/modal";
import {confirmationModal} from "./interface"

const ConfirmationModal = ({visible, onClose, onConfirm, message}:confirmationModal) => {

    const handleConfirmation = useCallback(() => {
        onConfirm()
        onClose()
    },[onClose, onConfirm])

    return (
        <Modal 
            label="cnfrmtn"
            visible={visible}
            onClose={onClose}
            width="25%"
            onOK={handleConfirmation}
            submitTitle="cnfrm"
        >
            {message ? message : "Are you want to continue ?"}
        </Modal>
    )
}

export default memo(ConfirmationModal)
export * from "./interface"