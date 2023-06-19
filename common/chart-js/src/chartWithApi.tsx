import React, { memo, useEffect, useState } from "react";
import { useFetch } from "@commons/hooks"
import BarChart from "./chart";
import { chartWithApi } from "./interface"

const ChartWithApi = ({
    api,
    params,
    ...prop
}: chartWithApi) => {

    const [dataSource, setDataSource] = useState({
        labels: [],
        datasets: [
            {
                label: '',
                data: [],
            },
        ],
    })

    const { data } = useFetch({
        link: api,
        fetchOnFirstRun: true,
        params: params
    })

    useEffect(() => {
        if (!Array.isArray(data)) {
            setDataSource(data)
        }
    }, [data])

    return (
        <>
            <BarChart
                dataSource={dataSource}
                {...prop}
            />
        </>
    )
}

export default memo(ChartWithApi);