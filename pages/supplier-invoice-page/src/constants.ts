import { defaultDate } from "@commons/global";

export const initialRootState = {
  supplier_id: "",
  supplier_name: "",
  supplier_invoice_date: defaultDate,
  supplier_invoice_items: [],
  query_status: "n",
  supplier_invoice_total: 0,
  supplier_invoice_discount: 0,
  supplier_invoice_after_discount: 0,
  supplier_invoice_paid: 0,
  supplier_invoice_credit: 0,
};

export const initialItemState = {
  item_id: "",
  width: 0,
  height: 0,
  size: 0,
  quantity: 0,
  price: 0,
  total: 0,
  notes: "",
};

export const itemValidate = [
  "supplier_invoice_item_id",
  "supplier_invoice_item_width",
  "supplier_invoice_item_height",
  "supplier_invoice_item_size",
  "supplier_invoice_item_quantity",
  "supplier_invoice_item_price",
  "supplier_invoice_item_total",
];

export const rootValidate = [
  "supplier_id",
  "supplier_invoice_date",
  "supplier_invoice_items",
  "supplier_invoice_total",
  "supplier_invoice_after_discount",
];

export const columns = [
  {
    title: "itmnm",
    width: "27%",
    dataIndex: "item_name",
  },
  {
    title: "wdth",
    width: "7%",
    dataIndex: "supplier_invoice_item_width",
  },
  {
    title: "hght",
    width: "7%",
    dataIndex: "supplier_invoice_item_height",
  },
  {
    title: "sz",
    width: "7%",
    dataIndex: "supplier_invoice_item_size",
  },
  {
    title: "qnty",
    width: "7%",
    dataIndex: "supplier_invoice_item_quantity",
  },
  {
    title: "prc",
    width: "7%",
    dataIndex: "supplier_invoice_item_price",
  },
  {
    title: "total",
    width: "10%",
    dataIndex: "supplier_invoice_item_total",
  },
  {
    title: "nts",
    width: "15%",
    dataIndex: "supplier_invoice_item_notes",
  },
];
