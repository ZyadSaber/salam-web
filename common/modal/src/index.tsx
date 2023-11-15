import React, { memo } from 'react';
import { Button } from "@commons/button";
import { BaseTitle } from "@commons/page-title"
import Flex from "@commons/flex"
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter } from "./style"

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
    height?: string;
    noFooter?: boolean;
}

const Modal = (
    {
        children,
        visible = false,
        label,
        onClose,
        onOK,
        submitTitle = "smbt",
        width = "90%",
        height = "auto",
        hideSaveButton = false,
        hideCloseButton = false,
        noFooter = false
    }: ModalProp
) => {

    return (
        <>
            {visible &&
                <ModalContainer hidden={!visible} onKeyUp={(e) => console.log(e.key)}>
                    <ModalContent width={width} height={height}>
                        <ModalHeader>
                            <BaseTitle value={label} />
                            <Button label='&times;' backGround='none' margin='0' padding='0' data-dismiss="modal" onClick={onClose} />
                        </ModalHeader>

                        <ModalBody>
                            <Flex width="100%" padding="0" wrap height="100%">
                                {children}
                            </Flex>
                        </ModalBody>

                        {!noFooter &&
                            <ModalFooter hidden={noFooter}>
                                {!hideSaveButton && <Button onClick={onOK} label={submitTitle} hidden={hideSaveButton} width='20%' margin='0' />}
                                {!hideCloseButton && <Button onClick={onClose} label='cls' hidden={hideCloseButton} width='20%' backGround='red' margin='0' />}
                            </ModalFooter>
                        }
                    </ModalContent>
                </ModalContainer>
            }
        </>
    )
}

export default memo(Modal);