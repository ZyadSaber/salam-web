export interface option{
    label: string | number;
    value: string | number;
    checked?: boolean;
}
export interface radioBoxProps{
    name: string;
    options: option[]
    width?: number | string;
    onChange?: any;
    value?: string | number;
    Label?: string | number;
    margin?: number | string;
    padding?: number | string;
}