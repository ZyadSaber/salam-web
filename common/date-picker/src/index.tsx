import React, { memo } from "react";
import { InputText } from "@commons/input-text";
import { defaultDate } from "@commons/global";

const DatePicker = ({ value, ...props }: any) => {

    return (
        <>
            <InputText
                type="date"
                {...props}
                value={value !== "" ? value : defaultDate}
            />
        </>
    )
}

export default memo(DatePicker)