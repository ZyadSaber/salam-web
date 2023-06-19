export const mainTableColumns = [
  {
    title: "no",
    dataIndex: "invoice_id",
    width: "14%",
  },
  {
    title: "nm",
    dataIndex: "invoice_holder_name",
    width: "20%",
  },
  {
    title: "dt",
    dataIndex: "invoice_date",
    width: "10%",
  },
  {
    title: "total",
    dataIndex: "invoice_after_discount",
    width: "10%",
  },
];

export const detailTableColumns = [
  {
    title: "itmnm",
    dataIndex: "invoice_item_name",
    width: "15%",
  },
  {
    title: "wdth",
    dataIndex: "invoice_item_width",
    width: "5%",
  },
  {
    title: "hght",
    dataIndex: "invoice_item_height",
    width: "5%",
  },
  {
    title: "sz",
    dataIndex: "invoice_item_size",
    width: "5%",
  },
  {
    title: "qnty",
    dataIndex: "invoice_item_quantity",
    width: "5%",
  },
  {
    title: "prc",
    dataIndex: "invoice_item_price",
    width: "5%",
  },
  {
    title: "total",
    dataIndex: "invoice_item_total",
    width: "5%",
  },
  {
    title: "nts",
    dataIndex: "invoice_item_notes",
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
