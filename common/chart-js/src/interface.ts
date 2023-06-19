export interface barChartProp {
  mode?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  label?: string | number;
  dataSource?: any;
}

export interface dataType {
  labels: string[];
  datasets: {
    label: string;
    data: any[];
    backgroundColor?: string[];
    borderColor?: string;
    borderWidth?: number;
  };
}

export interface chartWithApi extends barChartProp {
  api: string;
  params?: any;
}
