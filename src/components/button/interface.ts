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
    additionalStyle?: string
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
    pathTo: string
}