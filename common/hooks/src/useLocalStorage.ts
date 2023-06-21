import { useState, useCallback, useEffect } from "react";

interface storageDataType {
  name: string;
  data: any;
}
const useLocalStorage = (storageName?: string) => {
  const [localStorageData, setLocalStorageData] = useState({
    authorization: 0,
    display_name: "",
    app_name: "",
    build_name: "",
    role: "",
  });
  const [storage, setStorage] = useState();

  const changeLocalStorage = useCallback((storageData: storageDataType[]) => {
    // eslint-disable-next-line array-callback-return
    storageData.map((data: storageDataType) => {
      window.localStorage.setItem(data.name, JSON.stringify(data.data));
    });
  }, []);

  const clearLocalStorage = useCallback(() => {
    window.localStorage.clear();
  }, []);

  useEffect(() => {
    if (storageName) {
      const getStorage = window.localStorage.getItem(storageName);
      //@ts-ignore
      setStorage(JSON.parse(getStorage));
    }
  }, [storageName]);

  useEffect(() => {
    const localStorage = window.localStorage.getItem("salam");
    if (localStorage) {
      setLocalStorageData(JSON.parse(localStorage));
    }
  }, []);

  return {
    authorization: localStorageData.authorization,
    displayName: localStorageData.display_name,
    storage,
    appName: localStorageData.app_name,
    changeLocalStorage,
    buildName: localStorageData.build_name,
    role: localStorageData.role,
    clearLocalStorage,
  };
};

export default useLocalStorage;
