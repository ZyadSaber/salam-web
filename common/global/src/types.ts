export interface onChangeType {
  value: string | number | boolean;
  name: string;
}

export interface addionalButton {
  icon: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ModalViewProp {
  visible: boolean;
  onOK: () => void;
  refreshTable: () => void;
  onClose: () => void;
  selectedRow: any;
  setSelectedRow: any;
}
