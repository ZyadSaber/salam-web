import { useState, useCallback, useEffect } from "react";

interface storageDataType{
    name: string;
    data: any
}
const useLoacalStorage = (storageName?: string)=>{
    const [localStorageData, setLocalStorageData] = useState({
        authorization: 0,
        display_name: ""
    })
    const [storage, setStorage] = useState()

    const changeLocalStorage = useCallback((storageData: storageDataType[])=>{
        storageData.map((data: storageDataType)=>{
            window.localStorage.setItem(data.name, JSON.stringify(data.data))
        })
    },[])

    useEffect(()=>{
        if(storageName){
            const getStorage = window.localStorage.getItem(storageName)
            //@ts-ignore
            setStorage(JSON.parse(getStorage))
            
        }
    },[storageName])

    useEffect(()=>{
    const localStorage =  window.localStorage.getItem("salam")
    if(localStorage){
        setLocalStorageData(JSON.parse(localStorage))
    }
    },[])

    return{authorization: localStorageData.authorization, displayName: localStorageData.display_name, storage, changeLocalStorage}
}

export default useLoacalStorage