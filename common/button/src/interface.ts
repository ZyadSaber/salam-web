import {ButtonProps} from "antd"


export interface buttonProp extends ButtonProps {
  width?: string;
  margin?: string;
  height?: string;
  padding?: string;
  additionalStyle?: string;
  color?: string;
  backGround?: string;
  borderRadius?: string;
  fontWeight?: string;
  border?: string;
  label?: string;
  onDoubleClick?: () => void;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  hidden?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  fontSize?: any
}
export interface linkButtonProp extends buttonProp {
  label: string;
  pathTo: string;
  iconName?: string;
}

export interface searchClearProp extends buttonProp {
  onSearch?: () => void;
  onClear?: () => void;
  noSearch?: boolean;
  noClear?: boolean;
}

export interface iconButtonProp extends buttonProp {
  iconName?: string;
  iconClassName?: string
}

export interface saveButtonProp extends buttonProp {
  onOK?: () => void;
}

export interface typeObject {
  [key: string]: string;
}
