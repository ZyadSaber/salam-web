import { ReactNode } from "react";

export interface flexProps {
  children?: ReactNode;
  justifyContent?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  bordered?: boolean;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  backgroundColor?: string;
  flexDirection?: string;
  align?: string;
  hidden?: boolean;
  wrap?: boolean;
  gap?: string;
  overflow?: string;
  minHeight?: string;
  overFlowX?: string;
  overFlowY?: string;
}
