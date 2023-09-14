export interface buttonProp {
  label?: string;
  onDoubleClick?: () => void;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  hidden?: boolean;
  width?: string;
  margin?: string;
  height?: string;
  padding?: string;
  additionalStyle?: string;
  color?: string;
  backGround?: string;
  borderRadius?: string;
  fontWeight?: string;
}
export interface linkButtonProp extends buttonProp {
  label: string;
  onClick?: () => void;
  pathTo: string;
}

export interface iconButtonProp {
  icon: string;
  onClick?: () => void;
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
  color?: string;
  margin?: number | string;
  padding?: number | string;
  hidden?: boolean;
  position?: string;
}

export interface saveButtonProp extends buttonProp {
  onOK?: () => void;
}
