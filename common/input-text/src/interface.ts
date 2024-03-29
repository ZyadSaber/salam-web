export interface InputTextProps extends React.InputHTMLAttributes<number> {
  value?: string | number;
  name?: string;
  label?: string;
  onChange?: any;
  disabled?: boolean;
  width?: number | string;
  type?: string;
  placeHolder?: string;
  padding?: number | string;
  margin?: number | string;
  className?: string;
  noAuthorization?: boolean;
  required?: boolean;
  height?: number | string;
}

export interface TextAreaProps {
  value?: string | number;
  name?: string;
  label?: string;
  onChange?: any;
  disabled?: boolean;
  width?: number | string;
  placeHolder?: string;
  padding?: number | string;
  margin?: number | string;
  height?: number | string;
}
