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
  Label?: string | number;
  hidden?: boolean;
  margin?: number | string;
  padding?: number | string;
}
