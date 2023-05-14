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
}