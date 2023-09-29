const API_ID = {
  //http://144.24.209.19:9090/api/basic_data/customers/customers_table_data
  QUERY_CUSTOMER_TABLE_DATA: "basic_data/customers/customers_table_data",
  //http://144.24.209.19:9090/api/basic_data/customers/customers_table_data_dml
  POST_CUSTOMER_TABLE_DATA: "basic_data/customers/customers_table_data_dml",
  //http://144.24.209.19:9090/api/basic_data/suppliers/suppliers_table_data
  QUERY_SUPPLIER_TABLE_DATA: "basic_data/suppliers/suppliers_table_data",
  //http://144.24.209.19:9090/api/basic_data/suppliers/suppliers_table_data_dml
  POST_SUPPLIER_TABLE_DATA: "basic_data/suppliers/suppliers_table_data_dml",
  //http://144.24.209.19:9090/api/invoices/customer_invoice/new_customer_invoice
  POST_CUSTOMER_INVOICE_DETAILS:
    "invoices/customer_invoice/new_customer_invoice",
  POST_EMPLOYEE_ATTENDANCE: "employeesData/employee_attendance_dml",
  POST_EMPLOYEE_LEAVING: "employeesData/employee_leaving_dml",
  //http://144.24.209.19:9090/api/employees/employee_data/employee_table_data
  QUERY_EMPLOYEES_TABLE_DATA: "employees/employee_data/employee_table_data",
  ////http://144.24.209.19:9090/api/employees/employee_data/employee_table_data_dml
  POST_EMPLOYEES_TABLE_DATA: "employees/employee_data/employee_table_data_dml",
  //http://144.24.209.19:9090/api/invoices/invoice_search/customer_supplier_invoice_detail_table?invoice_type=C&invoice_no=
  QUERY_INVOICE_DETAIL_TABLE_DATA:
    "invoices/invoice_search/customer_supplier_invoice_detail_table",
  //http://144.24.209.19:9090/api/invoices/invoice_search/customer_supplier_invoice_main_table?invoice_type=C&invoice_no=
  QUERY_INVOICE_MASTER_TABLE_DATA:
    "invoices/invoice_search/customer_supplier_invoice_main_table",
  //http://144.24.209.19:9090/api/invoices/invoice_search/customer_invoices_for_today
  QUERY_CUSTOMERS_INVOICES_FOT_TODAY:
    "invoices/invoice_search/customer_invoices_for_today",
  QUERY_SUPPLIERS_INVOICES_FOT_TODAY:
    "invoices/invoice_search/supplier_invoices_for_today",
  //http://144.24.209.19:9090/api/basic_data/items/items_table_data
  QUERY_ITEMS_TABLE_DATA: "basic_data/items/items_table_data",
  //http://144.24.209.19:9090/api/basic_data/items/items_table_data_dml
  POST_ITEMS_TABLE_DATA: "basic_data/items/items_table_data_dml",
  //http://144.24.209.19:9090/api/basic_data/print_options/print_options_table_data
  QUERY_PRINT_OPTIONS_TABLE_DAT:
    "basic_data/print_options/print_options_table_data",
  POST_PRINT_OPTIONS_TABLE_DATA:
    "basic_data/print_options/print_options_table_data_dml",
  //http://144.24.209.19:9090/auth_security/sign_in
  USER_LOG_IN: "auth_security/sign_in",
  //http://144.24.209.19:9090/api/invoices/supplier_invoice/new_supplier_invoice
  POST_SUPPLIER_INVOICE: "invoices/supplier_invoice/new_supplier_invoice",
  QUERY_LABELS: "get_labels",
  QUERY_CHUNK_LABELS: "get_chunk_labels",
  QUERY_EMPLOYEE_NAME_LIST: "employeesData/pop_employee_name",
  //http://144.24.209.19:9090/api/invoices/invoice_search/customer_supplier_list?invoice_type=S
  QUERY_CUSTOMER_AND_SUPPLIER_LIST:
    "invoices/invoice_search/customer_supplier_list",
  //http://144.24.209.19:9090/api/basic_data/suppliers/suppliers_list
  QUERY_SUPPLIER_LIST: "basic_data/suppliers/suppliers_list",
  //http://144.24.209.19:9090/api/basic_data/customers/customers_list
  QUERY_CUSTOMERS_LIST: "basic_data/customers/customers_list",
  //http://144.24.209.19:9090/api/basic_data/items/items_list
  QUERY_ITEMS_LIST: "basic_data/items/items_list",
  //http://144.24.209.19:9090/api/basic_data/print_options/print_options_lins
  QUERY_PRINT_OPTIONS_LIST: "basic_data/print_options/print_options_lins",
  //http://144.24.209.19:9090/api/v1/employeesData/employee_sheet?employee_id=4
  QUERY_EMPLOYEE_SHEET_SALARY: "employeesData/employee_sheet",
  //http://144.24.209.19:9090/api/income_and_expenses/casher_receipt_voucher/main_table?date_from=2023-04-01&date_to=2023-04-30
  QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:
    "income_and_expenses/casher_receipt_voucher/main_table",
  //http://144.24.209.19:9090/api/income_and_expenses/casher_receipt_voucher/main_table_dml
  POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:
    "income_and_expenses/casher_receipt_voucher/main_table_dml",
  //http://144.24.209.19:9090/api/income_and_expenses/casher_receipt_voucher/main_table?date_from=2023-04-01&date_to=2023-04-30
  QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:
    "income_and_expenses/casher_payment_voucher/main_table",
  //http://144.24.209.19:9090/api/income_and_expenses/casher_receipt_voucher/main_table_dml
  POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:
    "income_and_expenses/casher_payment_voucher/main_table_dml",
  //http://144.24.209.19:9090/api/v1/home/dash_board_get_data?authorization=1677621781730
  QUERY_MAIN_CHART_DATA: "home/dash_board_get_data",
  //http://144.24.209.19:9090/api/basic_data/expenses_type/expenses_type_table_data
  QUERY_EXPENSES_TYPES_TABLE_DATA:
    "basic_data/expenses_type/expenses_type_table_data",
  //http://144.24.209.19:9090/api/basic_data/expenses_type/expenses_type_table_data_dml
  POST_EXPENSES_TYPES_TABLE_DATA:
    "basic_data/expenses_type/expenses_type_table_data_dml",
  GET_PRIMARY_IMAGE: "application_logo/primary_logo",
  //http://144.24.209.19:9090/api/charts/invoices_query?
  QUERY_INVOICES_CHART_DATA: "charts/invoices_query",
  //http://144.24.209.19:9090/api/auth_security/users_info
  QUERY_USERS_TABLE_DATA: "auth_security/users_info",
  //http://144.24.209.19:9090/api/auth_security/users_info_dml
  POST_USERS_TABLE_DATA: "auth_security/users_info_dml",
  //http://144.24.209.19:9090/api/system_tools/page_name/page_name_table_data
  QUERY_PAGE_NAME_MAIN_TABLE: "system_tools/page_name/page_name_table_data",
  //http://144.24.209.19:9090/api/system_tools/page_name/page_name_table_data_dml
  POST_PAGE_NAME_MAIN_TABLE: "system_tools/page_name/page_name_table_data_dml",
  //http://144.24.209.19:9090/api/system_reports/customer_summary_table
  QUERY_CUSTOMER_SUMMARY_TABLE: "system_reports/customer_summary_table",
  //http://144.24.209.19:9090/api/system_reports/supplier_summary_table?supplier_id=1
  QUERY_SUPPLIER_SUMMARY_TABLE: "system_reports/supplier_summary_table",
  //http://144.24.209.19:9090/api/system_reports/items_summary_table?item_id=1
  QUERY_ITEM_SUMMARY_TABLE: "system_reports/items_summary_table",
  //http://144.24.209.19:9090/api/system_reports/daily_summary_table?date_from=2023-01-01&date_to=2023-12-12
  QUERY_DAILY_SUMMARY_TABLE: "system_reports/daily_summary_table",
  //http://144.24.209.19:9090/api/system_reports/accounts_summary_table?type=C
  QUERY_ACCOUNTS_SUMMARY_TABLE: "system_reports/accounts_summary_table",
  //http://144.24.209.19:9090/api/auth_security/salam_pages?user_name=admin
  QUERY_SIDE_PAGES_DATA: "auth_security/salam_pages",
  //http://144.24.209.19:9090/api/system_tools/parent_pages/page_name_table_data
  QUERY_PAGE_PARENT_LIST: "system_tools/parent_pages/page_name_table_data"
};

export default API_ID;
