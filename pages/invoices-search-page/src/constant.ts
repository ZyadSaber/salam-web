export const initialFormValues = {
  invoice_type: "C",
  invoice_no: "",
  person_id: "",
  date_from: "",
  date_to: "",
};

export const mainTableColumns = [
  {
    title: "no",
    dataIndex: "invoice_id",
    width: "10%",
  },
  {
    title: "nm",
    dataIndex: "holder_name",
    width: "49%",
  },
  {
    title: "dt",
    dataIndex: "invoice_date",
    width: "20%",
  },
  {
    title: "total",
    dataIndex: "invoice_total",
    width: "19%",
  },
];

export const detailTableColumns = [
  {
    title: "itmnm",
    dataIndex: "item",
    width: "23%",
  },
  {
    title: "wdth",
    dataIndex: "width",
    width: "10%",
  },
  {
    title: "hght",
    dataIndex: "height",
    width: "10%",
  },
  {
    title: "sz",
    dataIndex: "size",
    width: "10%",
  },
  {
    title: "qnty",
    dataIndex: "quantity",
    width: "10%",
  },
  {
    title: "prc",
    dataIndex: "price",
    width: "10%",
  },
  {
    title: "total",
    dataIndex: "total",
    width: "10%",
  },
  {
    title: "nts",
    dataIndex: "notes",
    width: "15%",
  },
];

export const RadioBoxOptions = [
  {
    label: "splr",
    value: "S",
  },
  {
    label: "cstmr",
    value: "C",
  },
];
