import { defaultDateAndTime } from "@commons/global";

console.log(defaultDateAndTime)

export const initialRootState = {
  customer_id: "",
  customer_invoice_date: defaultDateAndTime,
  customer_invoice_items: [],
  query_status: "n",
  customer_invoice_total: 0,
  customer_invoice_discount: 0,
  customer_invoice_after_discount: 0,
  customer_invoice_paid: 0,
  customer_invoice_credit: 0,
  customer_invoice_design_fee: 0,
};

export const initialItemState = {
  print_id: "",
  item_id: "",
  width: 0,
  height: 0,
  size: 0,
  quantity: 0,
  price: 0,
  total: 0,
  notes: "",
  item_name: "",
  print_name: "",
};

export const rootValidate = [
  // "customer_id",
  // "customer_invoice_date",
  // "customer_invoice_items",
  // "customer_invoice_total",
  // "customer_invoice_after_discount",
];

export const itemValidate = [
  // "customer_invoice_item_id",
  // "customer_invoice_item_width",
  // "customer_invoice_item_height",
  // "customer_invoice_item_size",
  // "customer_invoice_item_quantity",
  // "customer_invoice_item_price",
  // "customer_invoice_item_total",
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
