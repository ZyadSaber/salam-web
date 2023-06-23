import React, { memo } from 'react';
import { ChartWithApi } from "@pages/chart-js";
import Flex from "@commons/flex";
import { TableWithApi } from "@commons/table";
import { mainTableColumns, customerTableColumns } from "./constants"

const DashBoard = () => {

    return (
        <>
            <Flex width='100%'>
                <Flex width='75%' flexDirection='column'>
                    <TableWithApi
                        api='QUERY_CUSTOMERS_INVOICES_FOT_TODAY'
                        rowKey=''
                        columns={customerTableColumns}
                        fetchOnFirstRun
                        label='cstmrs'
                    />
                    <TableWithApi
                        api='QUERY_SUPPLIERS_INVOICES_FOT_TODAY'
                        rowKey=''
                        columns={mainTableColumns}
                        fetchOnFirstRun
                        label='splrs'
                    />
                </Flex>
                <Flex width='25%' flexDirection="column">
                    <ChartWithApi
                        api="QUERY_INVOICES_CHART_DATA"
                        label="invcs"
                        mode="pie"
                        width="100%"
                    />
                    <ChartWithApi
                        api="QUERY_MAIN_CHART_DATA"
                        label="vault"
                        mode="pie"
                        width="100%"
                    />
                </Flex>
            </Flex>

        </>
    )
};

export default memo(DashBoard);
