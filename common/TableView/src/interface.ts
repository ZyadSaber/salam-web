export interface column {
  title: string;
  width?: number | string;
  dataIndex?: any;
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
  actionColumn?: boolean;
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
  onDoubleClick?: (e: any) => void;
}

export interface additionalButtonsType {
  icon: string;
  onClick: () => void;
  disabled?: boolean;
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
}
