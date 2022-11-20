import React, { memo, useCallback } from 'react';
import Button from "../button/button"
import "./style.css";

interface ModalProp {
    visible?: boolean,
    children: any,
    label: string,
    onOK?: () => void,
    onClose?: () => void
}

const Modal = (
    {
        children,
        visible = false,
        label,
        onClose,
        onOK
    }: ModalProp
) => {

    if (visible) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <div
                className="modal"
                hidden={!visible}
            >
                <div className="overlay"></div>
                <div className="modal-content">
                    <h2>{label}</h2>
                    {children}
                    <div className="btns">
                        <Button
                            label='Sumbit'
                            onClick={onOK}
                        />
                        <Button
                            label='Close'
                            onClick={onClose}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Modal);