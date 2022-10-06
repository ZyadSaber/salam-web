import { useState, useEffect, useCallback } from "react";
import useFetch from '../../hooks/useFetch';

const useCheckUser = (userName: string, password: string) => {
    const { data } = useFetch("http://localhost:8000/users")
    const [users, setUsers] = useState({})
    const [ authorization, setAuthorization ] = useState<boolean>(false)


   useEffect(()=>{
     for (let i=0; i < data.length ; i++) {
        if (data[i].username === userName && data[i].password === password) {
            setAuthorization(true)
        }
    }
   }, [data, password, userName])


      return{authorization}
}

export default useCheckUser