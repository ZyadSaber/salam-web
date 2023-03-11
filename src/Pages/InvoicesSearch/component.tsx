import { memo, useCallback, useState } from "react";
import ApiTable from "../../components/TableView/ApiTable";
import { mainTableColumns, detailTableColumns } from "./constant";
import FormView from "./Partials/FormView";
import useFormManager from "../../hooks/useFormManager";
import Flex from "../../components/Flex/Flex";

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
            <Flex width="100%" margin="0" padding="0" flexDirection="column">
                <FormView
                    changeSearchParams={changeSearchParams}
                    searchParams={searchParams}
                />
                <Flex width="100%" margin="0" padding="0" justifyContent="space-between">
                    <ApiTable
                        columns={mainTableColumns}
                        api="QUERY_INVOICE_MASTER_TABLE_DATA"
                        rowKey="invoice_id"
                        fetchOnFirstRun
                        params={{
                            invoice_type: invoice_type,
                            invoice_number: invoice_number,
                            person_id: person_id,
                            // date_from: date_from,
                            // date_to: date_to
                        }}
                        width="40%"
                        onSelectedRow={onSelectedRow}
                    />
                    <ApiTable
                        columns={detailTableColumns}
                        api="QUERY_INVOICE_DETAIL_TABLE_DATA"
                        rowKey="row_key"
                        fetchOnFirstRun
                        width="60%"
                        params={{
                            invoice_type: invoice_type,
                            invoice_number: row.invoice_id
                        }}
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default memo(InvoicesSearch)