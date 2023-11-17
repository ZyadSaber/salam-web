import styled, { keyframes } from "styled-components";
import { primaryColors } from "@commons/global";

export const Overlay = styled.div<any>`
  opacity: ${({ opacity }) => (opacity ? opacity : 0.8)};
  visibility: ${({ visible }) => (visible ? "opacity" : "hidden")};
  background-color: ${({ backColor }) =>
    backColor ? backColor : primaryColors.lightGray};
  display: flex;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  transition: opacity 0.3s ease-in-out;
`;

const loadingKeyFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div<any>`
  box-sizing: border-box;
  display: block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 2px solid ${({ color }) => color};
  border-radius: 50%;
  animation-delay: -0.3s;
  animation: ${loadingKeyFrames} 1s linear infinite;
  border-color: ${({ color }) => color} transparent transparent transparent;
  &[disabled] {
    pointer-events: none;
    cursor: not-allowed;
  }
`;
Loading.defaultProps = {
  color: "currentcolor",
  width: "1em",
  height: "1em",
};

// export const Loading = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 40px;
//   height: 40px;
//   border: 6px solid #f3f3f3;
//   border-radius: 50%;
//   border-top: 6px solid #3498db;
//   -webkit-animation: spin 1s linear infinite;
//   animation: spin 1s linear infinite;

//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;
