import React, { memo } from "react";
import Select from "./select";
import { useFetch } from "@commons/hooks"
import { SelectWithApiProps } from "./interface"

const SelectWithApi = ({
    width,
    Api,
    onChange,
    Label,
    name = "",
    value = 0,
    withLabel = false,
    padding,
    margin,
    params,
    fetchOnFirstRun = false,
    selectLabelName = "label_select"
}: SelectWithApiProps) => {

    const { data } = useFetch({
        link: Api,
        fetchOnFirstRun: fetchOnFirstRun,
        params: params
    })

    return (
        <>
            <Select
                Options={data}
                onChange={onChange}
                Label={Label}
                value={value}
                name={name}
                width={width}
                withLabel={withLabel}
                margin={margin}
                padding={padding}
                selectLabelName={selectLabelName}
            />
        </>
    )
}

export default memo(SelectWithApi);