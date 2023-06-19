import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
export interface buttonProp {
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
  position?: string;
  leftIcon?:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
  rightIcon?:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
}
export interface linkButtonProp {
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
  position?: string;
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
