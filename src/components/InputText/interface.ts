export interface InputTextProps {
    value?: string | number;
    name: string;
    Label?: string;
    onChange?: any;
    disabled?: boolean;
    width?: number | string;
    type  ?: string;
    placeHolder?: string;
    padding?: number | string;
    margin?: number | string;
}

export interface TextAreaProps{
    value?: string | number;
    name: string;
    Label?: string;
    onChange?: any;
    disabled?: boolean;
    width?: number | string;
    placeHolder?: string;
    padding?: number | string;
    margin?: number | string;
    height?: number | string;
}