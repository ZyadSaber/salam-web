import { defaultDate } from "@commons/global";

export const initialRootState = {
  supplier_id: 0,
  supplier_name: "",
  supplier_invoice_date: defaultDate,
  supplier_invoice_items: [],
  query_status: "n",
  supplier_invoice_total: 0,
  supplier_invoice_discount: 0,
  supplier_invoice_after_discount: 0,
  supplier_invoice_paid: 0,
  supplier_invoice_credit: 0
}

export const initialItemState = {
  supplier_invoice_item_id: 0,
  supplier_invoice_item_width: 0,
  supplier_invoice_item_height: 0,
  supplier_invoice_item_size: 0,
  supplier_invoice_item_quantity: 0,
  supplier_invoice_item_price: 0,
  supplier_invoice_item_total: 0,
  supplier_invoice_item_notes: "",
  item_name: ""
}

export const itemValidate = [
  "supplier_invoice_item_id",
  "supplier_invoice_item_width",
  "supplier_invoice_item_height",
  "supplier_invoice_item_size",
  "supplier_invoice_item_quantity",
  "supplier_invoice_item_price",
  "supplier_invoice_item_total",
  "item_name",
]

export const rootValidate = [
  "supplier_id",
  "supplier_invoice_date",
  "supplier_invoice_items",
  "supplier_invoice_total",
  "supplier_invoice_discount",
  "supplier_invoice_after_discount",
  "supplier_invoice_paid",
  "supplier_invoice_credit",
]

export const columns = [
  {
    title: "itmnm",
    width: "11.1%",
    dataIndex: "item_name",
  },
  {
    title: "wdth",
    width: "11.1%",
    dataIndex: "supplier_invoice_item_width",
  },
  {
    title: "hght",
    width: "11.1%",
    dataIndex: "supplier_invoice_item_height",
  },
  {
    title: "sz",
    width: "11.1%",
    dataIndex: "supplier_invoice_item_size",
  },
  {
    title: "qnty",
    width: "11.1%",
    dataIndex: "supplier_invoice_item_quantity",
  },
  {
    title: "prc",
    width: "11.1%",
    dataIndex: "supplier_invoice_item_price",
  },
  {
    title: "total",
    width: "11.1%",
    dataIndex: "supplier_invoice_item_total",
  },
  {
    title: "nts",
    width: "11.1%",
    dataIndex: "supplier_invoice_item_notes",
  },
];
