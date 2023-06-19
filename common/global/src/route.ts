import Customers from "@pages/customers-page";
import SignInPage from "@pages/sign-in-page";
import DashBoard from "@pages/dashboard-page";
import Suppliers from "@pages/suppliers-page";
import Items from "@pages/items-page";
import EmployeesData from "@pages/employees-data-page";
import SupplierInvoice from "@pages/supplier-invoice-page";
import PrintOptions from "@pages/print-options-page";
import CustomerInvoices from "@pages/customer-invoice-page";
import InvoicesSearch from "@pages/invoices-search-page";
import EmpoloyeeSheet from "@pages/employee-sheet-page";
import CasherReceiptVoucher from "@pages/casher-receipt-voucher-page";
import CasherPaymentVoucher from "@pages/casher-payment-voucher-page";
import CustomersSummaryPage from "@pages/customers-summary-page";
import SupplierSummaryPage from "@pages/supplier-summary-page";
import ItemSummaryPage from "@pages/item-summary-page";
import DailyTotalPage from "@pages/daily-totals-page";
import MonthlyTotalsPage from "@pages/monthly-totals-page";
import YearlyTotalsPage from "@pages/yearly-totals-page";
import ExpensesTotalsPage from "@pages/expenses-totals-page";
import UsersPage from "@pages/users-page";
import LabelsPage from "@pages/labels-page";
import ExpensesType from "@pages/expenses-type-page";

const PageRoutes = [
  {
    Path: "/customers",
    Component: Customers,
  },
  {
    Path: "/suppliers",
    Component: Suppliers,
  },
  {
    Path: "/items",
    Component: Items,
  },
  {
    Path: "/employeeData",
    Component: EmployeesData,
  },
  {
    Path: ["/", "/login"],
    Component: SignInPage,
  },
  {
    Path: "/home",
    Component: DashBoard,
  },
  {
    Path: "/supplierInvoices",
    Component: SupplierInvoice,
  },
  {
    Path: "/printOptions",
    Component: PrintOptions,
  },
  {
    Path: "/customerInvoices",
    Component: CustomerInvoices,
  },
  {
    Path: "/invoicesSearch",
    Component: InvoicesSearch,
  },
  {
    Path: "/employeeSalary",
    Component: EmpoloyeeSheet,
  },
  {
    Path: "/casherReceiptVoucher",
    Component: CasherReceiptVoucher,
  },
  {
    Path: "/casherPaymentVoucher",
    Component: CasherPaymentVoucher,
  },
  {
    Path: "/customersSummary",
    Component: CustomersSummaryPage,
  },
  {
    Path: "/suppliersSummary",
    Component: SupplierSummaryPage,
  },
  {
    Path: "/itemsSummary",
    Component: ItemSummaryPage,
  },
  {
    Path: "/dailyTotals",
    Component: DailyTotalPage,
  },
  {
    Path: "/monthlyTotals",
    Component: MonthlyTotalsPage,
  },
  {
    Path: "/yearlyTotals",
    Component: YearlyTotalsPage,
  },
  {
    Path: "/expensesTotals",
    Component: ExpensesTotalsPage,
  },
  {
    Path: "/users",
    Component: UsersPage,
  },
  {
    Path: "/labels",
    Component: LabelsPage,
  },
  {
    Path: "/expensesType",
    Component: ExpensesType,
  },
];

export default PageRoutes;
