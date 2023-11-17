export interface option {
  label: string | number;
  value: string;
  checked?: boolean;
}
export interface radioBoxProps {
  name: string;
  options: option[];
  width?: number | string;
  onChange?: any;
  value?: string | undefined;
  label?: string;
  hidden?: boolean;
  margin?: number | string;
  disabled?: boolean;
  padding?: number | string;
  height?: number | string;
}
