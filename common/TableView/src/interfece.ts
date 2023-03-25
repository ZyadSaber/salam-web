
export interface column {
    title: string;
    width?: number | string;
    dataIndex?: any;
}

export interface TableProps {
    rowkey?: string | number;
    dataSource?: any[];
    columns: column[];
    title?: string;
    canEdit?: boolean;
    canAdd?: boolean;
    canDelete?: boolean;
    hideTools?: boolean;
    onAdd?: () => void;
    onEdit?: () => void | any;
    onDelete?: () => void;
    children?: any;
    Form?: any;
    actionColumn?: boolean;
    onAction?: any;
    actionLabel?: string;
    onSelectedRow?: any;
    canPrint?: boolean;
    onPrint?: () => void;
    // addionalButtons?: addionalButton[];
    addionalButtons?: any[];
    onSave?: () => void;
    canSave?: boolean;
    width?: number | string;
    padding?: number | string;
    margin?: number | string;
}