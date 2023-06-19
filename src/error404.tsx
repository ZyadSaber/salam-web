import { memo } from "react";
import "./error404.css"

const Error404 = () => {
    return (
        <>
            <div id="main">
                <div className="fof">
                    <h1>Error 404</h1>
                    <h3>Sorry this page is not available</h3>
                </div>
            </div>
        </>
    )
}

export default memo(Error404)