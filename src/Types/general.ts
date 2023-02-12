export interface onChangeType {
    value: string;
    name: string;
}

export interface addionalButton{
    icon: string;
    onClick?: () => void;
    disabled?: boolean;
}

export interface ModalViewProp {
     visible: boolean;
    onOK: () => void;
    onClose: () => void;
    selectedRow: any;
    setSelectedRow: any
}