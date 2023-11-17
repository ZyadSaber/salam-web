import { SelectProps } from "antd";

export interface option{
  label: string;
  value: number | string;
};

export type selectProps = SelectProps & {
  options?: option[];
  onChange?: any;
  height?: string | number;
  label?: string;
  value?: number;
  name: string;
  width?: string;
  withLabel?: boolean;
  margin?: string;
  padding?: string;
  placeholder?: string;
  selectLabelName?: string;
  onSearch?: (searchItem?: string | any) => void;
  hidden?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export interface SelectWithApiProps extends selectProps {
  api: string;
  onChange?: any;
  label?: string;
  value?: number;
  name: string;
  width?: string;
  withLabel?: boolean;
  margin?: string;
  padding?: string;
  params?: any;
  fetchOnFirstRun?: boolean;
  placeholder?: string;
  selectLabelName?: string;
}

export interface monthSelectProp {
  range?: number;
  onChange?: any;
  label?: string;
  value?: number;
  name: string;
  width?: string;
  withLabel?: boolean;
  margin?: string;
  padding?: string;
}
