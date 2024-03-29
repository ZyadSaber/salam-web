import styled from "@emotion/styled";
import { flexProps } from "./interface";
export const StyledFlex = styled.div<flexProps>`
  display: flex;
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ width }) => width && `width: ${width};`}
    ${({ height }) => height && `height: ${height};`}
    ${({ padding }) => padding && `padding: ${padding};`}
    ${({ margin }) => margin && `margin: ${margin};`}
    ${({ bordered }) => bordered && `border: 1px solid black;`}
    ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
    ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth};`}
    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
    ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
    ${({ flexDirection }) =>
    flexDirection && `flex-direction: ${flexDirection};`}
    ${({ align }) => align && `align-items: ${align};`}
    ${({ hidden }) => hidden && `display: none;`}
     ${({ wrap }) => wrap && `flex-wrap: wrap;`}
    ${({ gap }) => gap && `gap: ${gap};`};
  ${({ overFlowY }) => overFlowY && `overflow-y: ${overFlowY};`};
  ${({ overFlowX }) => overFlowX && `overflow-y: ${overFlowX};`};
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`};
`;
