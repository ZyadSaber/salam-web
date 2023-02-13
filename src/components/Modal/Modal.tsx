import { memo } from 'react';
import Button from "../button/button"

interface ModalProp {
    visible?: boolean,
    children?: any,
    label: string,
    onOK?: () => void,
    onClose?: () => void,
    submitTitle?: string,
    width?: string;
    hideSaveButton?: boolean;
    hideCloseButton?: boolean;
}

const Modal = (
    {
        children,
        visible = false,
        label,
        onClose,
        onOK,
        submitTitle = "Sumbit",
        width = "50%",
        hideSaveButton = false,
        hideCloseButton = false
    }: ModalProp
) => {

    return (
        <>
            <div hidden={!visible} className={`${visible ? "show" : ""} modal fade`} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: "block", backgroundColor: "rgba(49, 49, 49, 0.8)" }}>
                <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "none", width: width }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{label}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body" style={{ padding: "5px 20px", display: "flex" }} >
                            {children}
                        </div>
                        <div className="modal-footer">
                            <Button
                                label={submitTitle}
                                onClick={onOK}
                                className="btn btn-primary"
                                hidden={hideSaveButton}
                            />
                            <Button
                                label='Close'
                                onClick={onClose}
                                className="btn btn-secondary"
                                hidden={hideCloseButton}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Modal);