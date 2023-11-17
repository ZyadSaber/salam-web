import styled from "@emotion/styled";
import { InputNumber } from "antd";
import  {primaryColors} from "@commons/global"
import { inputNumberProp } from "./interface";

export const StyledInput = styled(InputNumber)<inputNumberProp>`
  width: 100%;
  /* padding: 5px 7px; */
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
  margin: 0;
  box-sizing: border-box;
  /* ${({ required }) =>
    required && `background-color:  ${primaryColors.required}`}; */

  &:focus {
    outline: none !important;
    border-color: #007bff;
  }
`;
