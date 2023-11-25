import { defaultDate } from "@commons/global";

export const initialFormValues = {
  invoice_type: "C",
  invoice_no: "",
  person_id: "",
  date_from: defaultDate,
  date_to: defaultDate,
};

export const mainTableColumns = [
  {
    title: "no",
    dataIndex: "invoice_id",
    width: "7%",
  },
  {
    title: "nm",
    dataIndex: "holder_name",
    width: "18%",
  },
  {
    title: "dt",
    dataIndex: "invoice_date",
    width: "14.5%",
  },
  {
    title: "total",
    dataIndex: "invoice_total_before_discount",
    width: "12.5%",
    calculateAmount: true,
  },
  {
    title: "dscnt",
    dataIndex: "invoice_discount",
    calculateAmount: true,
    width: "8%",
  },
  {
    title: "tlaftrdsnt",
    dataIndex: "invoice_total_after_discount",
    calculateAmount: true,
    width: "12.5%",
  },
  {
    title: "dbt",
    dataIndex: "invoice_paid",
    calculateAmount: true,
    width: "12.5%",
  },
  {
    title: "crdt",
    dataIndex: "invoice_credit",
    calculateAmount: true,
    width: "12.5%",
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
    width: "14%",
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
