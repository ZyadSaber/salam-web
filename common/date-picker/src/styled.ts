import styled from "@emotion/styled";
import { DatePicker } from 'antd';
import { DatePickerProp } from "./interface"

export const StyledDate = styled(DatePicker)<DatePickerProp>`
  ${({required})=> required && "border: 1px solid red;"}
`;