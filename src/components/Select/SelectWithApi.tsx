import { memo } from "react";
import Select from "./Select";
import useFetch from "../../hooks/useFetch";

interface SelectWithApiProps {
    Api: string;
    onChange?: any;
    Label?: string;
    value?: number
    name: string;
    width?: number | string;
    withLabel?: boolean;
    margin?: number | string;
    padding?: number | string;
    params?: any
}

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
    params
}: SelectWithApiProps) => {

    const { data } = useFetch({
        link: Api,
        fetchOnFirstRun: true,
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