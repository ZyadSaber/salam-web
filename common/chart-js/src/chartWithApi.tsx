import React, { memo, useEffect, useState } from "react";
import BarChart from "./chart";
import { useFetch } from "@commons/hooks"

const ChartWithApi = ({
    api,
    params,
    width,
    height,
    padding,
    margin,
    label,
    mode
}: any) => {

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
                width={width}
                height={height}
                padding={padding}
                margin={margin}
                label={label}
                mode={mode}
            />
        </>
    )
}

export default memo(ChartWithApi);