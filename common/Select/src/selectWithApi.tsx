import React, { memo, useCallback } from "react";
import Select from "./select";
import { useFetch } from "@commons/hooks"
import { SelectWithApiProps } from "./interface"

const SelectWithApi = ({
    width,
    api,
    onChange,
    label,
    name = "",
    value = 0,
    withLabel = false,
    padding,
    margin,
    params,
    selectLabelName = "label_select",
    ...props
}: SelectWithApiProps) => {

    const { data, runFetch, loading } = useFetch({
        link: api,
        fetchOnFirstRun: true,
        params: params,
        checkForParams: true
    })

    const handleSearch = useCallback((search_word: string|number|unknown)=>{
        // runFetch({
        //     search_word
        // })
    }, [])

    return (
        <>
            <Select
                options={data}
                onChange={onChange}
                label={label}
                value={value}
                name={name}
                width={width}
                withLabel={withLabel}
                margin={margin}
                padding={padding}
                selectLabelName={selectLabelName}
                onSearch={handleSearch}
                loading={loading}
                {...props}
            />
        </>
    )
}

export default memo(SelectWithApi);