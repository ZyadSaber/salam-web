import React, { memo } from "react";
import { Button, IconButton } from "@commons/button";
import { primaryColors } from "@commons/global";
import { BaseTitle } from "@commons/page-title";
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./style";

interface ModalProp {
  visible?: boolean;
  children?: any;
  label: string;
  onOK?: () => void;
  onClose?: () => void;
  submitTitle?: string;
  width?: string;
  hideSaveButton?: boolean;
  hideCloseButton?: boolean;
  height?: string;
  noFooter?: boolean;
}

const Modal = ({
  children,
  visible = false,
  label,
  onClose,
  onOK,
  submitTitle = "smbt",
  width = "40%",
  height = "auto",
  hideSaveButton = false,
  hideCloseButton = false,
  noFooter = false,
}: ModalProp) => {
    const { danger } = primaryColors;
  return (
    <>
      {visible && (
        <ModalContainer hidden={!visible}>
          <ModalContent width={width} height={height}>
            <ModalHeader>
              <BaseTitle>{label}</BaseTitle>
              <IconButton
                onClick={onClose}
                iconName="close"
                backGround="transparent"
                color={danger}
              />
            </ModalHeader>

            <ModalBody>{children}</ModalBody>

            {!noFooter && (
              <ModalFooter hidden={noFooter}>
                {!hideSaveButton && (
                  <Button
                    onClick={onOK}
                    label={submitTitle}
                    hidden={hideSaveButton}
                    width="auto"
                  />
                )}
                {!hideCloseButton && (
                  <Button
                    onClick={onClose}
                    label="cls"
                    hidden={hideCloseButton}
                    backGround={danger}
                    width="auto"
                  />
                )}
              </ModalFooter>
            )}
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default memo(Modal);
