import styled from "@emotion/styled";

export const FloatingLabelContainer = styled.div<any>`
  position: relative;
  margin-bottom: 20px;
  width: ${({ width }) => width};
`;

export const FloatingLabelLabel = styled.label<any>`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #999;
  transition: top 0.3s, font-size 0.3s;

  ${({ hasContent }) =>
    hasContent &&
    `
    top: -12px;
    font-size: 12px;
    color: #007bff;
  `}
`;
