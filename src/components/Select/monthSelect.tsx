import { memo, useCallback } from "react";
import { monthSelectProp } from "./interface"
import Select from "./Select";

const MonthSelect = ({
    width = "100px",
    onChange,
    Label,
    value = 0,
    name,
    withLabel = false,
    margin = "10px",
    padding,
}: monthSelectProp) => {

    const options = useCallback(() => {
        let options = []
        for (let i = 1; i <= 12; i++) {
            options.push({ label: i, value: i })
        }
        return options
    }, [])

    return (
        <>
            <Select
                name={name}
                withLabel={withLabel}
                margin={margin}
                padding={padding}
                value={value}
                onChange={onChange}
                Label={Label}
                width={width}
                //@ts-ignore for now
                Options={options()}
            />
        </>
    )
}

export default memo(MonthSelect)