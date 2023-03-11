import Customers from "../Pages/Customers/component";
import SignInPage from '../Pages/SignInPage/component';
import DashBoard from "../Pages/DashBoard/component";
import Suppliers from '../Pages/Suppliers/component';
import Items from "../Pages/Items/component";
import EmployeesData from "../Pages/EmployeesData/component";
import SupplierInvoice from "../Pages/SupplierInvoice/component";
import PrintOptions from "../Pages/PrintOptions/component";
import CustomerInvoices from "../Pages/CustomerInvoices/component";
import InvoicesSearch from "../Pages/InvoicesSearch/component";
import EmployeeAttendance from "../Pages/employeeAttendance/component";
import EmpoloyeeSheet from "../Pages/employeeSheet/component";

export const PageRoutes = [{
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
    Path: "employeeAttendance",
    Component: EmployeeAttendance
},
{
    Path: "employeeSalary",
    Component: EmpoloyeeSheet
}
]
