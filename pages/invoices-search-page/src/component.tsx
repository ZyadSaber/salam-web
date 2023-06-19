import React, { memo, useCallback, useState } from "react";
import { Table } from "@commons/table";
import { useFormManager } from "@commons/hooks";
import Flex from "@commons/flex";
import { useFetch } from "@commons/hooks"
import FormView from "./Partials/FormView";
import { mainTableColumns, detailTableColumns } from "./constant";

const InvoicesSearch = () => {

    const [row, setRow] = useState({
        invoice_id: ""
    })
    const {
        state
        , onChange
    } = useFormManager({
        initialValues: {
            invoice_type: "C",
            invoice_no: "",
            person_id: "",
            date_from: "",
            date_to: ""
        }
    })
    const { invoice_type, invoice_no, person_id } = state

    const onSelectedRow = useCallback((row?: any) => {
        setRow(row)
    }, [])

    const { data, runFetch, loading } = useFetch({
        link: "QUERY_INVOICE_MASTER_TABLE_DATA",
        params: {
            invoice_type: invoice_type,
            invoice_no: invoice_no,
            person_id: person_id,
        },
    })

    const {
        data: detailData,
        runFetch: runFetchDetailData,
        loading: detailLoading
    } = useFetch({
        link: "QUERY_INVOICE_DETAIL_TABLE_DATA",
        params: {
            invoice_type: invoice_type,
            invoice_no: row.invoice_id
        }
    })

    const runQuery = useCallback(() => {
        runFetch()
        runFetchDetailData()
    }, [runFetch, runFetchDetailData])

    return (
        <>
            <Flex width="100%" margin="0" padding="0" flexDirection="column">
                <FormView
                    onChange={onChange}
                    state={state}
                    runQuery={runQuery}
                />
                <Flex width="100%" margin="0" padding="0" justifyContent="space-between">
                    <Flex width="40%">
                        <Table
                            columns={mainTableColumns}
                            dataSource={data?.data}
                            rowKey="invoice_id"
                            onSelectedRow={onSelectedRow}
                            height="400px"
                            loading={loading}
                        />
                    </Flex>
                    <Flex width="60%">
                        <Table
                            columns={detailTableColumns}
                            dataSource={detailData?.data}
                            rowKey="row_key"
                            loading={detailLoading}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default memo(InvoicesSearch)