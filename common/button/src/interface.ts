import { ButtonProps } from "@chakra-ui/react";
export interface buttonProp extends ButtonProps {
  label: string;
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
  variant?: string;
  size?: string;
}
export interface linkButtonProp extends ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  hidden?: boolean;
  width?: string;
  margin?: string;
  height?: string;
  padding?: string;
  pathTo: string;
  color?: string;
  variant?: string;
  size?: string;
  target?: string;
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

export interface saveButtonProp {
  saveTitle?: string;
  onOK?: () => void;
  disabled?: boolean;
  width?: number | string;
  margin?: number | string;
  padding?: number | string;
  position?: string;
}
