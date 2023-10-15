import React, { memo } from 'react';
import {Button} from "@commons/button";
import {BaseTitle} from "@commons/page-title"
import {
    Modal as ModalView,
    ModalOverlay,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex
} from '@chakra-ui/react';
import "./index.css"
import {ModalContainer, ModalContent} from "./style"

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
    return (
        <>
        {visible &&
            <ModalContainer hidden={!visible}>
  {/* <div className="overlay"></div> */}

  <ModalContent width="1100px" height='100%'>
    <div>
        <BaseTitle value={label} />
        <Button label='&times;' backGround='none' data-dismiss="modal" />
    </div>

    <div className="modal-body">
      {children}
    </div>

    <div className="modal-footer">
        <Button onClick={onOK} label={submitTitle}/>
        <Button onClick={onClose} label='cls' />
    </div>
  </ModalContent>
</ModalContainer>
        }
        </>
    )
}

export default memo(Modal);


  // {/* <ModalView isOpen={visible} onClose={onClose} size={width}>
            //     <ModalOverlay />
            //     <ModalContent>
            //         <ModalHeader>{t(label)}</ModalHeader>
            //         <ModalCloseButton />
            //         <ModalBody>
            //             <Flex w="100%" padding="5px" wrap="wrap">
            //                 {children}
            //             </Flex>
            //         </ModalBody>
            //         <ModalFooter>
            //             <Flex w="25%" justifyContent="space-around">
            //                 <Button colorScheme='red' mr={3} onClick={onClose} hidden={hideCloseButton}>
            //                     {t("cls")}
            //                 </Button>
            //                 <Button colorScheme='blue' onClick={onOK} hidden={hideSaveButton} >{t(submitTitle)}</Button>
            //             </Flex>
            //         </ModalFooter>
            //     </ModalContent>
            // </ModalView> */}