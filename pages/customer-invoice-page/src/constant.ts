import { defaultDate } from "@commons/global";

export const initialRootState = {
  customer_id: undefined,
  customer_invoice_date: defaultDate,
  customer_invoice_items: [],
  query_status: "n",
  customer_invoice_total: undefined,
  customer_invoice_discount: undefined,
  customer_invoice_after_discount: undefined,
  customer_invoice_paid: undefined,
  customer_invoice_credit: undefined,
  customer_invoice_design_fee: undefined,
};

export const initialItemState = {
  customer_invoice_print_option_id: undefined,
  customer_invoice_item_id: undefined,
  customer_invoice_item_width: undefined,
  customer_invoice_item_height: undefined,
  customer_invoice_item_size: undefined,
  customer_invoice_item_quantity: undefined,
  customer_invoice_item_price: undefined,
  customer_invoice_item_total: undefined,
  customer_invoice_item_notes: "",
  item_name: "",
  print_name: "",
};

export const rootValidate = [
  "customer_id",
  "customer_invoice_date",
  "customer_invoice_items",
  "customer_invoice_total",
  "customer_invoice_after_discount",
];

export const itemValidate = [
  "customer_invoice_item_id",
  "customer_invoice_item_width",
  "customer_invoice_item_height",
  "customer_invoice_item_size",
  "customer_invoice_item_quantity",
  "customer_invoice_item_price",
  "customer_invoice_item_total",
];

export const columns = [
  {
    title: "prntnm",
    width: "20%",
    dataIndex: "print_name",
  },
  {
    title: "itmnm",
    width: "20%",
    dataIndex: "item_name",
  },
  {
    title: "wdth",
    width: "5%",
    dataIndex: "customer_invoice_item_width",
  },
  {
    title: "hght",
    width: "5%",
    dataIndex: "customer_invoice_item_height",
  },
  {
    title: "sz",
    width: "5%",
    dataIndex: "customer_invoice_item_size",
  },
  {
    title: "qnty",
    width: "5%",
    dataIndex: "customer_invoice_item_quantity",
  },
  {
    title: "prc",
    width: "7%",
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
