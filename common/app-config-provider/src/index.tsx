import React, { memo, useState } from "react";
// import { useLocation } from "react-router-dom";
import { Store } from "./context/store";
import { initialContextValues } from "./constants";
import { AppConfigProviderProps } from "./interface";

const AppConfigProvider = ({ children }: AppConfigProviderProps) => {
  const [state, setContext] =
    useState<typeof initialContextValues>(initialContextValues);
  // const {pathname} = useLocation()
  // console.log(pathname)
  return (
    <Store.Provider
      value={{
        state,
        //@ts-ignore
        setAuthValues: setContext,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default memo(AppConfigProvider);
export { default as useSideBarIndex } from "./hooks/useSideBarIndex";
export { default as useSetAuthConfigData } from "./hooks/useSetAuthConfigData";
export * from "./interface";
