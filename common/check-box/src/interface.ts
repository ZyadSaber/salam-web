import {CheckboxProps} from "antd"

export interface CheckBoxProps extends CheckboxProps {
  label?: string;
  value?: string;
  disabled?: boolean;
  onChange?: any;
  name?: string;
  width?: string;
  padding?: string;
  height?: string;
  margin?: string;
  required?: boolean;
}
