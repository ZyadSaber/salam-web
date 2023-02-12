import { memo, useCallback, useState } from "react";
import ApiTable from "../../components/TableView/ApiTable";
import { mainTableColumns, detailTableColumns } from "./constant";
import FormView from "./Partials/FormView";
import useFormManager from "../../hooks/useFormManager";

const InvoicesSearch = () => {

    const searchParamsBaseValues = {
        invoice_type: "",
        invoice_number: "",
        person_id: "",
        date_from: "",
        date_to: ""
    }
    const [row, setRow] = useState({
        invoice_number: ""
    })
    const { state: searchParams, onChange: changeSearchParams } = useFormManager({ initialValue: searchParamsBaseValues })
    //@ts-ignore
    const { invoice_type, invoice_number, name, date_from, date_to } = searchParams

    const onSelectedRow = useCallback((row?: any) => {
        setRow(row)
    }, [])

    return (
        <>
            <FormView
                changeSearchParams={changeSearchParams}
                searchParams={searchParams}
            />
            <div style={{ display: "flex" }}>
                <ApiTable
                    columns={mainTableColumns}
                    //@ts-ignore
                    api="invoices/get_invoice_master"
                    rowKey="invoice_id"
                    width="35%"
                    fetchOnFirstRun
                    params={{
                        invoice_type: invoice_type,
                        number: invoice_number,
                        name: name,
                        date_from: date_from,
                        date_to: date_to
                    }}
                    onSelectedRow={onSelectedRow}
                />
                <div style={{ width: "65%" }}>
                    <ApiTable
                        columns={detailTableColumns}
                        api="invoices/get_invoice_detail"
                        rowKey="item_id"
                        fetchOnFirstRun
                        params={{
                            invoice_type: invoice_type,
                            invoice_number: row.invoice_number
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default memo(InvoicesSearch)