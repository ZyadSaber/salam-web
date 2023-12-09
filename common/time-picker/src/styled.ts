import styled from "@emotion/styled";
import { TimePicker } from 'antd';
import { DatePickerProp } from "./interface"

export const StyledDate = styled(TimePicker)<DatePickerProp>`
  ${({required})=> required && "border: 1px solid red;"}
  width: 100%;
`;