export const customerTableColumns = [
  {
    title: "no",
    dataIndex: "customer_invoice_id",
    width: "5%",
  },
  {
    title: "nm",
    dataIndex: "invoice_holder_name",
    width: "10%",
  },
  {
    title: "total",
    dataIndex: "customer_invoice_total",
    width: "5%",
  },
  {
    title: "discount",
    dataIndex: "customer_invoice_discount",
    width: "5%",
  },
  {
    title: "total after",
    dataIndex: "customer_invoice_after_discount",
    width: "5%",
  },
  {
    title: "paid",
    dataIndex: "customer_invoice_paid",
    width: "5%",
  },
  {
    title: "credit",
    dataIndex: "customer_invoice_credit",
    width: "5%",
  },
];

export const mainTableColumns = [
  {
    title: "no",
    dataIndex: "invoice_id",
    width: "15%",
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
