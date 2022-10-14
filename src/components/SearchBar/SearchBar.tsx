import { memo, useCallback } from "react";
import "./style.css";

interface SearchBarProp {
    width?: number
    placeholder?: string;
    setValue?: any;
    onSearch?: () => void
}

const SearchBar = ({
    width = 30,
    placeholder = "search",
    setValue,
    onSearch
}: SearchBarProp) => {



    const handleSearch = useCallback((event: { target: { value: string } }) => {
        setValue(event.target.value);
    }, [setValue]);


    return (
        <>
            <div className="wrap" style={{
                width: `${width}%`
            }}>
                <div className="search">
                    <input type="text" className="searchTerm" placeholder={placeholder} onChange={handleSearch} />
                    <button type="submit" className="searchButton" onClick={onSearch}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default memo(SearchBar)