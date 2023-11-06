import styled from "@emotion/styled";
import { styledButton } from "./interface";

export const StyledButton = styled.button<styledButton>`
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  background-color: ${({ backGround }) => backGround};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight};
  border: ${({ border }) => border};
`;
