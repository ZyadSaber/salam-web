import styled from "@emotion/styled";
import {primaryColors} from "@commons/global"

export const Overlay = styled.div<any>`
  opacity: ${({ opacity }) => (opacity ? opacity : 0.8)};
  visibility: ${({ visible }) => visible ? "opacity" : "hidden"};
  background-color: ${({ backColor }) =>
    backColor ? backColor : primaryColors.lightGray};
  display: flex;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
  z-index: 9999;
  border-radius: 10px;
`;

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid #3498db;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
