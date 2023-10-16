import React, { memo } from "react";
import Select from "./select";
import { useFetch } from "@commons/hooks"
import { SelectWithApiProps } from "./interface"

const SelectWithApi = ({
    width,
    Api,
    onChange,
    label,
    name = "",
    value = 0,
    withLabel = false,
    padding,
    margin,
    params,
    selectLabelName = "label_select"
}: SelectWithApiProps) => {

    const { data } = useFetch({
        link: Api,
        fetchOnFirstRun: true,
        params: params,
        checkForParams: true
    })

    return (
        <>
            <Select
                Options={data}
                onChange={onChange}
                label={label}
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