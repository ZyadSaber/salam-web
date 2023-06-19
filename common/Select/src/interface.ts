export interface SelectProps {
  Option?: {
    label: string;
    value: number | string;
  };
  Options: {
    label: string;
    value: number | string;
  }[];
  onChange?: any;
  Label?: string;
  value?: number;
  name: string;
  width?: string;
  withLabel?: boolean;
  margin?: string;
  padding?: string;
  placeholder?: string;
  selectLabelName?: string;
}

export interface SelectWithApiProps {
  Api: string;
  onChange?: any;
  Label?: string;
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
  Label?: string;
  value?: number;
  name: string;
  width?: string;
  withLabel?: boolean;
  margin?: string;
  padding?: string;
}
