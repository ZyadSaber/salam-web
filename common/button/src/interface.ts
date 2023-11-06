export interface styledButton {
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
}

export interface buttonProp extends styledButton {
  label?: string;
  onDoubleClick?: () => void;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  hidden?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}
export interface linkButtonProp extends buttonProp {
  label: string;
  pathTo: string;
}

export interface searchClearProp extends buttonProp {
  onSearch?: () => void;
  onClear?: () => void;
}

export interface iconButtonProp extends buttonProp {
  type: string;
}

export interface saveButtonProp extends buttonProp {
  onOK?: () => void;
}

export interface typeObject {
  [key: string]: string;
}
