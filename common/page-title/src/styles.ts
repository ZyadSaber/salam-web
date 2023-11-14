import styled from "styled-components";

export const StyledHeading = styled.h1<any>`
  width: ${({ width }) => width};
  padding: ${({ padding }) => (padding ? padding : 0)};
  margin: ${({ margin }) => (margin ? margin : 0)};
  color: ${({ color }) => color};
  background-color: ${({ backGround }) => backGround};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
