import { memo } from "react"
import Button from "./button";

const SearchButton = ({ onClick }: any) => {
    return (
        <>
            <Button
                label="search"
                height="50%"
                additionalStyle="top: 50%, position: relative;"
                onClick={onClick}
            />
        </>
    )
}

export default memo(SearchButton)