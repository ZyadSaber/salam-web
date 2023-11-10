import {InputNumberProps} from "antd"

export interface inputNumberProp extends InputNumberProps {
  disabled?: boolean;
  value: number;
  name: string;
  height?: number | string;
  label?: string;
  onChange?: any;
  width?: string;
  padding?: string;
  margin?: string;
  step?: number;
  min?: number;
  max?: number;
  required?: boolean;
}
