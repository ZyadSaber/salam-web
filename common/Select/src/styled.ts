import styled from "@emotion/styled";
import { Select, SelectProps } from "antd";

export const StyledSelect = styled(Select)<SelectProps>`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0;
  background-color: white;
  transition: border-color 0.3s;
  box-sizing: border-box;

  &:focus {
    outline: none !important;
    border-color: #007bff;
  }
`;
