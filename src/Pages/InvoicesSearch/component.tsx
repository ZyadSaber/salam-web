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
        invoice_id: ""
    })
    const { state: searchParams, onChange: changeSearchParams } = useFormManager({ initialValue: searchParamsBaseValues })
    //@ts-ignore
    const { invoice_type, invoice_number, person_id } = searchParams

    const onSelectedRow = useCallback((row?: any) => {
        setRow(row)
    }, [])

    console.log(person_id)

    return (
        <>
            <FormView
                changeSearchParams={changeSearchParams}
                searchParams={searchParams}
            />
            <div style={{ display: "flex" }}>
                <ApiTable
                    columns={mainTableColumns}
                    api="QUERY_INVOICE_MASTER_TABLE_DATA"
                    rowKey="invoice_id"
                    width="35%"
                    fetchOnFirstRun
                    params={{
                        invoice_type: invoice_type,
                        invoice_number: invoice_number,
                        person_id: person_id,
                        // date_from: date_from,
                        // date_to: date_to
                    }}
                    onSelectedRow={onSelectedRow}
                />
                <div style={{ width: "65%" }}>
                    <ApiTable
                        columns={detailTableColumns}
                        api="QUERY_INVOICE_DETAIL_TABLE_DATA"
                        rowKey="row_key"
                        fetchOnFirstRun
                        params={{
                            invoice_type: invoice_type,
                            invoice_number: row.invoice_id
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default memo(InvoicesSearch)