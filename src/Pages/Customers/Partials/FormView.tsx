import React, { memo } from 'react';
import SearchBar from "../../../components/SearchBar/SearchBar";

interface FormViewProp {
    setValue: any;
    onSearch: any
}

const FormView = ({
    setValue,
    onSearch
}: FormViewProp) => {
    return (
        <>
            <div className="Form">
                <div className="head">
                    <div className="search">
                        <SearchBar
                            placeholder={"Customer Name"}
                            setValue={setValue}
                            onSearch={onSearch}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(FormView)