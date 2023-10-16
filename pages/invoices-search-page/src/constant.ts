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
    width: "14%",
  },
  {
    title: "nm",
    dataIndex: "holder_name",
    width: "20%",
  },
  {
    title: "dt",
    dataIndex: "invoice_date",
    width: "10%",
  },
  {
    title: "total",
    dataIndex: "invoice_total",
    width: "10%",
  },
];

export const detailTableColumns = [
  {
    title: "itmnm",
    dataIndex: "item",
    width: "15%",
  },
  {
    title: "wdth",
    dataIndex: "width",
    width: "5%",
  },
  {
    title: "hght",
    dataIndex: "height",
    width: "5%",
  },
  {
    title: "sz",
    dataIndex: "size",
    width: "5%",
  },
  {
    title: "qnty",
    dataIndex: "quantity",
    width: "5%",
  },
  {
    title: "prc",
    dataIndex: "price",
    width: "5%",
  },
  {
    title: "total",
    dataIndex: "total",
    width: "5%",
  },
  {
    title: "nts",
    dataIndex: "notes",
    width: "5%",
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
