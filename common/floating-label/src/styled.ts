import styled from "@emotion/styled";

export const FloatingLabelContainer = styled.div<any>`
  position: relative;
  margin: ${({ margin }) => margin};
  padding: ${({padding})=>padding ? padding : "5px 0"};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export const FloatingLabelLabel = styled.label<any>`
  position: absolute;
  top: ${({top})=>top ? top : "5px"};
  left: 10px;
  color: #999;
  padding: 0;
  margin: 0;
  transition: top 0.3s, font-size 0.3s, background-color 0.5s;

  ${({ hasContent }) =>
    hasContent &&
    `
    top: -5px;
    font-size: 12px;
    color: #007bff;
    font-size: 14px;
    background-color: white;
  `}
`;
