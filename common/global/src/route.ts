import Customers from "@pages/customers-page";
import SignInPage from '@pages/sign-in-page';
import DashBoard from "@pages/dashboard-page";
import Suppliers from '@pages/suppliers-page';
import Items from "@pages/items-page";
import EmployeesData from "@pages/employees-data-page";
import SupplierInvoice from "@pages/supplier-invoice-page";
import PrintOptions from "@pages/print-options-page";
import CustomerInvoices from "@pages/customer-invoice-page";
import InvoicesSearch from "@pages/invoices-search-page";
import EmpoloyeeSheet from "@pages/employee-sheet-page";
import CasherReceiptVoucher from "@pages/casher-receipt-voucher-page"
import CasherPaymentVoucher from "@pages/casher-payment-voucher-page"

const PageRoutes = [{
    Path: "customers",
    Component: Customers
},
{
    Path: "suppliers",
    Component: Suppliers
},
{
    Path: "items",
    Component: Items
},
{
    Path: "employeeData",
    Component: EmployeesData
},
{
    Path: "",
    Component: SignInPage
},
{
    Path: "home",
    Component: DashBoard
},
{
    Path: "supplierInvoices",
    Component: SupplierInvoice
},
{
    Path: "printOptions",
    Component: PrintOptions
},
{
    Path: "customerInvoices",
    Component: CustomerInvoices
},
{
    Path: "invoicesSearch",
    Component: InvoicesSearch
},
{
    Path: "employeeSalary",
    Component: EmpoloyeeSheet
},
{
    Path: "casherReceiptVoucher",
    Component: CasherReceiptVoucher
},
{
    Path: "casherPaymentVoucher",
    Component: CasherPaymentVoucher
}
]

export default PageRoutes