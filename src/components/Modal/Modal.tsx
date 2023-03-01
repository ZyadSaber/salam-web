import { memo } from 'react';
import { useTranslation } from 'react-i18next'
import {
    Modal as ModalView,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex
} from '@chakra-ui/react';

interface ModalProp {
    visible?: boolean,
    children?: any,
    label: string,
    onOK?: () => void,
    onClose: () => void,
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
        submitTitle = "smbt",
        width = "3xl",
        hideSaveButton = false,
        hideCloseButton = false
    }: ModalProp
) => {
    const { t } = useTranslation()
    return (
        <>

            <ModalView isOpen={visible} onClose={onClose} size={width}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{t(label)}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex w="100%" padding="5px" wrap="wrap">
                            {children}
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose} hidden={hideCloseButton}>
                            {t("cls")}
                        </Button>
                        <Button colorScheme='blue' onClick={onOK} hidden={hideSaveButton} >{t(submitTitle)}</Button>
                    </ModalFooter>
                </ModalContent>
            </ModalView>
            {/* <div hidden={!visible} className={`${visible ? "show" : ""} modal fade`} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: "block", backgroundColor: "rgba(49, 49, 49, 0.8)" }}>
                <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "none", width: width }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{label}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body" style={{ padding: "5px 20px" }} >
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
            </div> */}
        </>
    )
}

export default memo(Modal);