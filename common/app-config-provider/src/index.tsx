import React, { memo } from "react";
// import { useLocation } from "react-router-dom";
import {Store} from "./context/store"
import { AppConfigProviderProps } from "./interface"

const AppConfigProvider = ({children}: AppConfigProviderProps) => {
    // const {pathname} = useLocation()
    // console.log(pathname)
    const contextProvider = { sideBlock: 0,
        sideCollapsible: false,
        userName: "",}
    return (
           <Store.Provider value={contextProvider}>
            {children}
           </Store.Provider>
    )
}

export default memo(AppConfigProvider);
export { default as useSideBarIndex } from "./hooks/useSideBarIndex";
export * from "./interface"