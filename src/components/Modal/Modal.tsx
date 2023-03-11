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
                        <Flex w="25%" justifyContent="space-around">
                            <Button colorScheme='red' mr={3} onClick={onClose} hidden={hideCloseButton}>
                                {t("cls")}
                            </Button>
                            <Button colorScheme='blue' onClick={onOK} hidden={hideSaveButton} >{t(submitTitle)}</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </ModalView>
        </>
    )
}

export default memo(Modal);