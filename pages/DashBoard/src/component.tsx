import React, { memo } from 'react';
import { ChartWithApi } from "@pages/chart-js";
import Flex from "@commons/flex";
import { TableWithApi } from "@commons/table";
import { mainTableColumns } from "./constants"

const DashBoard = () => {

    return (
        <>
            <Flex width='100%'>
                <Flex width='75%' flexDirection='column'>
                    <TableWithApi
                        api='QUERY_INVOICE_MASTER_TABLE_DATA'
                        rowKey=''
                        columns={mainTableColumns}
                        fetchOnFirstRun
                        label='customers invoices'
                        params={{
                            invoice_type: "C"
                        }}
                    />
                    <TableWithApi
                        api='QUERY_INVOICE_MASTER_TABLE_DATA'
                        rowKey=''
                        columns={mainTableColumns}
                        fetchOnFirstRun
                        label='supplier invoices'
                        params={{
                            invoice_type: "S"
                        }}
                    />
                </Flex>
                <Flex width='25%' flexDirection="column">
                    {/* <ChartWithApi
                        api="QUERY_MAIN_CHART_DATA"
                        label="vault"
                        mode="pie"
                        width="100%"
                    /> */}
                    {/* <ChartWithApi
                        api="QUERY_MAIN_CHART_DATA"
                        label="vault"
                        mode="pie"
                        width="100%"
                    /> */}
                </Flex>
            </Flex>

        </>
    )
};

export default memo(DashBoard);
