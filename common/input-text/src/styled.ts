import styled from "@emotion/styled";
import { primaryColors } from "@commons/global";

export const StyledInput = styled.input<any>`
  width: 100%;
  padding: 5px 7px;
  border: 1px solid #ccc;
  border-radius: 5px;

  transition: border-color 0.3s;
  box-sizing: border-box;
  /* ${({ required }) =>
    required && `background-color:  ${primaryColors.required}`}; */

  &:focus {
    outline: none !important;
    border-color: #007bff;
  }
`;
