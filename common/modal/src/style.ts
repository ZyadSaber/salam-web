import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const ModalContent = styled.div<{ width: string; height?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 30px 0 rgba(#000, 0.25);
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ModalHeader = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalBody = styled.div`
  margin: 10px 15px;
  height: 100%;
`;

export const ModalFooter = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #ddd;
  gap: 12px;
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -51px;
    left: 24px;
    right: 24px;
    height: 50px;
    flex-shrink: 0;
    background-image: linear-gradient(to top, rgba(#fff, 0.75), transparent);
    pointer-events: none;
  }
`;
