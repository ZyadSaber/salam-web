import { useCallback } from "react";
import useAppConfigStore from "./useAppConfig";

const useSetAuthConfigData = () => {
  const { setAuthValues, state } = useAppConfigStore();

  return useCallback(
    (values: any) => {
      console.log(values);
      //@ts-ignore
      setAuthValues(() => ({
        ...state,
        ...values,
      }));
    },
    [setAuthValues, state]
  );
};

export default useSetAuthConfigData;
