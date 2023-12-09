import type { TimePickerProps } from "antd";
import { dateFormats } from "./constant";

export type DatePickerProp = TimePickerProps & {
  dateFormat?: keyof typeof dateFormats;
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
