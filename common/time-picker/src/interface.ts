import type { TimePickerProps } from "antd";

export type DatePickerProp = TimePickerProps & {
  format?: string;
  actualDate?: string;
  customDataMessage?: string;
  label?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  name?: string;
  onChange?:any;
  showTime?: boolean;
  required?: boolean;
};
