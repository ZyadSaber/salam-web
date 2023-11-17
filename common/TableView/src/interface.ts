export interface column {
  title: string;
  width?: number | string;
  dataIndex?: any;
}

export interface additionalButtonsType {
  icon?: string;
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  width?: string;
  padding?: string;
  margin?: string;
}

export interface actionButtonsType {
  icon?: string;
  label?: string;
  onClick: (e: any, d?: number) => void;
  disabled?: boolean;
  width?: string;
  padding?: string;
  margin?: string;
}
export interface tableControlButtonsProp {
  hideTools?: boolean;
  canAdd?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
  canSave?: boolean;
  canPrint?: boolean;
  canExcel?: boolean;
  onAdd?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onSave?: () => void;
  onPrint?: () => void;
  onExcel?: () => void;
  addDisabled?: boolean;
  editDisabled?: boolean;
  deleteDisabled?: boolean;
  saveDisabled?: boolean;
  printDisabled?: boolean;
  excelDisabled?: boolean;
  additionalButtons?: additionalButtonsType[];
}

export interface TableProps {
  rowKey?: string | number;
  dataSource?: any[];
  columns: column[];
  height?: string;
  label?: string;
  title?: string;
  canEdit?: boolean;
  canAdd?: boolean;
  canDelete?: boolean;
  canExcel?: boolean;
  hideTools?: boolean;
  onAdd?: () => void;
  onEdit?: () => void | any;
  onDelete?: () => void;
  children?: any;
  Form?: any;
  actionColumn?: actionButtonsType[];
  onAction?: any;
  actionLabel?: string;
  onSelectedRow?: any;
  canPrint?: boolean;
  onPrint?: () => void;
  additionalButtons?: additionalButtonsType[];
  onSave?: () => void;
  canSave?: boolean;
  width?: number | string;
  padding?: number | string;
  margin?: number | string;
  loading?: boolean;
  onDoubleClick?: (e: any, t: any) => void;
  addDisabled?: boolean;
  editDisabled?: boolean;
  deleteDisabled?: boolean;
  saveDisabled?: boolean;
  printDisabled?: boolean;
  excelDisabled?: boolean;
  overflowY?: string;
  actionWidth?: string | number;
  fixedHeight?: string;
  selectedRowBackgroundColor?: any;
  noPagination?: boolean;
}

export interface TableWithApiProps extends TableProps {
  api: string;
  postApi?: string;
  columns: {
    title: string;
    dataIndex: string;
    width: number | string;
  }[];
  ModalContent?: any;
  checkForParams?: boolean;
  onClick?: any;
  fetchOnFirstRun?: boolean;
  refreshAfter?: number;
  params?: any;
  modalWidth?: string;
  printProps?: { [key: string]: string | number };
  reportName?: string;
}
