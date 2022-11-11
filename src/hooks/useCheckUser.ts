import React, { useState, useEffect, useCallback } from "react";

interface role{
  "basicData":{
                    "hidden":boolean;
                    "customers":boolean;
                    "suppliers":boolean;
                    "items":boolean
                },
                "invoices":{
                    "supplierInvoices":boolean;
                    "customerInvoices":boolean;
                    "invoicesSearch":boolean;
                    "hidden":boolean
                },
                "employees":{
                    "employeeAttendance":boolean;
                    "employeeLeaving":boolean;
                    "employeeSalary":boolean;
                    "employeeData":boolean;
                    "hidden":boolean
                },
                "accountSummary":{
                    "customersSummary":boolean;
                    "suppliersSummary":boolean;
                    "itemsSummary":boolean;
                    "hidden":boolean
                },
                "accountTotals":{
                    "dailyTotals":boolean;
                    "monthlyTotals":boolean;
                    "yearlyTotals":boolean;
                    "expensesTotals":boolean;
                    "hidden":boolean
                },
                "administration":{
                    "users":boolean;
                    "hidden":boolean
                }
}

const useCheckUser = () => {
    const [user, setUser] = useState("");
    const [hidden, setHidden] = useState(true);
    const [role, setRole] = useState<role>(
      {
                "basicData":{
                    "hidden":false,
                    "customers":false,
                    "suppliers":false,
                    "items":false
                },
                "invoices":{
                    "supplierInvoices":false,
                    "customerInvoices":false,
                    "invoicesSearch":false,
                    "hidden":false
                },
                "employees":{
                    "employeeAttendance":false,
                    "employeeLeaving":false,
                    "employeeSalary":false,
                    "employeeData":false,
                    "hidden":false
                },
                "accountSummary":{
                    "customersSummary":false,
                    "suppliersSummary":false,
                    "itemsSummary":false,
                    "hidden":false
                },
                "accountTotals":{
                    "dailyTotals":false,
                    "monthlyTotals":false,
                    "yearlyTotals":false,
                    "expensesTotals":false,
                    "hidden":false
                },
                "administration":{
                    "users":false,
                    "hidden":false
                }
            }
    )
    


    useEffect(
       useCallback(()=>{
         if (window.localStorage.getItem('user') !== null) {
            //@ts-ignore
            setUser(`Current user is ${JSON.parse(localStorage.getItem('user')).username}`)
            //@ts-ignore
            setRole(JSON.parse(localStorage.getItem('user')).role)
            setHidden(false)
        }else{
            setUser("You are not logged in")
        }
       },[])
    ,[])

      return{user, hidden, role}
}

export default useCheckUser