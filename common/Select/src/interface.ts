export interface SelectProps {
    Option?: {
        label: string,
        value: number | string
    };
    Options: {
        label: string,
        value: number | string
    }[]
    onChange?: any;
    Label?: string;
    value?: number;
    name: string;
    width?: number | string;
    withLabel?: boolean;
    margin?: number | string;
    padding?: number | string
};

export interface SelectWithApiProps {
    Api: string;
    onChange?: any;
    Label?: string;
    value?: number
    name: string;
    width?: number | string;
    withLabel?: boolean;
    margin?: number | string;
    padding?: number | string;
    params?: any;
    fetchOnFirstRun?: boolean;
}

export interface monthSelectProp{
    range?: number
     onChange?: any;
    Label?: string;
    value?: number;
    name: string;
    width?: number | string;
    withLabel?: boolean;
    margin?: number | string;
    padding?: number | string
}
