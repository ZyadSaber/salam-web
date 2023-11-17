import styled from "@emotion/styled";
import { Button } from "antd";
import { buttonProp } from "./interface";

export const StyledButton = styled(Button)<buttonProp>`
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  background-color: ${({ backGround }) => backGround};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight};
  border: ${({ border }) => border};
  font-size: ${({ fontSize }) => fontSize};
`;
