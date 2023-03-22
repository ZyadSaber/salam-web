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

    return (
        <>
            <Flex width="100%" margin="0" padding="0" flexDirection="column">
                <FormView
                    changeSearchParams={changeSearchParams}
                    searchParams={searchParams}
                />
                <Flex width="100%" margin="0" padding="0" justifyContent="space-between">
                    <Flex width="40%">
                        <ApiTable
                            columns={mainTableColumns}
                            api="QUERY_INVOICE_MASTER_TABLE_DATA"
                            rowKey="invoice_id"
                            fetchOnFirstRun
                            params={{
                                invoice_type: invoice_type,
                                invoice_number: invoice_number,
                                person_id: person_id,
                            }}
                            onSelectedRow={onSelectedRow}
                        />
                    </Flex>
                    <Flex width="60%">
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
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default memo(InvoicesSearch)