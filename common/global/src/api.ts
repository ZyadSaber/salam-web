const API_ID = {
    QUERY_CUSTOMER_TABLE_DATA: "basicData/customers",
    POST_CUSTOMER_TABLE_DATA: "basicData/customers_dml",
    QUERY_SUPPLIER_TABLE_DATA: "basicData/suppliers",
    POST_SUPPLIER_TABLE_DATA: "basicData/suppliers_dml",
    POST_CUSTOMER_INVOICE_DETAILS: "invoices/customer_invoice_dml",
    POST_EMPLOYEE_ATTENDANCE: "employeesData/employee_attendance_dml",
    POST_EMPLOYEE_LEAVING: "employeesData/employee_leaving_dml",
    QUERY_EMPLOYEES_TABLE_DATA: "employeesData/employees",
    POST_EMPLOYEES_TABLE_DATA: "employeesData/employees_dml",
    QUERY_INVOICE_DETAIL_TABLE_DATA: "invoices/get_invoice_detail",
    QUERY_INVOICE_MASTER_TABLE_DATA: "invoices/get_invoice_master",
    QUERY_ITEMS_TABLE_DATA: "basicData/items",
    POST_ITEMS_TABLE_DATA: "basicData/items_dml",
    QUERY_PRINT_OPTIONS_TABLE_DAT: "basicData/print_options",
    POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",
    USER_LOG_IN: "user_log_in",
    POST_SUPPLIER_INVOICE: "invoices/supplier_invoice_dml",
    QUERY_LABELS: "get_labels",
    QUERY_CHUNK_LABELS: "get_chunk_labels",
    QUERY_EMPLOYEE_NAME_LIST: "employeesData/pop_employee_name",
    QUERY_CUSTOMER_AND_SUPPLIER_LIST: "invoices/get_customer_supplier_list",
    QUERY_SUPPLIER_LIST: "basicData/supplier_pop_data",
    QUERY_ITEMS_LIST: "basicData/items_pop_data",
    //http://144.24.209.19:9090/api/v1/employeesData/employee_sheet?employee_id=4
    QUERY_EMPLOYEE_SHEET_SALARY: "employeesData/employee_sheet"
};

export default API_ID