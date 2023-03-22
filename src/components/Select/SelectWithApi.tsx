import { memo } from "react";
import Select from "./Select";
import useFetch from "../../hooks/useFetch";
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
    fetchOnFirstRun = false
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
            />
        </>
    )
}

export default memo(SelectWithApi);