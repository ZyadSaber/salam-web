import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalContainer = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
`

export const ModalContent = styled.div<{width: string, height?: string}>`
 position: relative;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: ${({width})=> width};
    height: ${({height})=> height};
    background-color: white;
    border-radius: 15px;
`

export const ModalHeader = styled.div<{visible: string, justifyContent: string, alignItems: string}>`
${({visible, justifyContent, alignItems})=> visible && 
css`
visibility: visible;
opacity: 1;
display: flex;
justify-content: ${justifyContent};
align-items: ${alignItems};
`}
`