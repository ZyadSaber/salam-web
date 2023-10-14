import { defaultDate } from "@commons/global";

export const initialRootState = {
  customer_id: 0,
  customer_invoice_date: defaultDate,
  customer_invoice_items: [],
  query_status: "n",
  customer_invoice_total: 0,
  customer_invoice_discount: 0,
  customer_invoice_after_discount: 0,
  customer_invoice_paid: 0,
  customer_invoice_credit: 0,
};

export const initialItemState = {
  customer_invoice_print_option_id: 0,
  customer_invoice_item_id: 0,
  customer_invoice_item_width: 0,
  customer_invoice_item_height: 0,
  customer_invoice_item_size: 0,
  customer_invoice_item_quantity: 0,
  customer_invoice_item_price: 0,
  customer_invoice_item_total: 0,
  customer_invoice_item_notes: "",
  item_name: "",
  print_name: "",
};

export const rootValidate = [
  "customer_id",
  "customer_invoice_date",
  "customer_invoice_items",
  "customer_invoice_total",
  "customer_invoice_discount",
  "customer_invoice_after_discount",
  "customer_invoice_paid",
  "customer_invoice_credit",
];

export const itemValidate = [
  "customer_invoice_item_id",
  "customer_invoice_item_width",
  "customer_invoice_item_height",
  "customer_invoice_item_size",
  "customer_invoice_item_quantity",
  "customer_invoice_item_price",
  "customer_invoice_item_total",
  "item_name",
];

export const columns = [
  {
    title: "prntnm",
    width: "10%",
    dataIndex: "print_name",
  },
  {
    title: "itmnm",
    width: "10%",
    dataIndex: "item_name",
  },
  {
    title: "wdth",
    width: "10%",
    dataIndex: "customer_invoice_item_width",
  },
  {
    title: "hght",
    width: "10%",
    dataIndex: "customer_invoice_item_height",
  },
  {
    title: "sz",
    width: "10%",
    dataIndex: "customer_invoice_item_size",
  },
  {
    title: "qnty",
    width: "10%",
    dataIndex: "customer_invoice_item_quantity",
  },
  {
    title: "prc",
    width: "10%",
    dataIndex: "customer_invoice_item_price",
  },
  {
    title: "total",
    width: "10%",
    dataIndex: "customer_invoice_item_total",
  },
  {
    title: "nts",
    width: "10%",
    dataIndex: "customer_invoice_item_notes",
  },
];
