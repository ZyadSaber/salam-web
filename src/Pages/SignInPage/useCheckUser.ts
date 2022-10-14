import { useState, useEffect, useCallback } from "react";
import useFetch from '../../hooks/useFetch';

const useCheckUser = (userName: string, password: string) => {
    const { data } = useFetch("http://localhost:8000/users")
    const [user, setUser] = useState({

    })
    const [ authorization, setAuthorization ] = useState<boolean>(false)


   useEffect(()=>{
     for (let i=0; i < data.length ; i++) {
        if (data[i].username === userName && data[i].password === password) {
            setAuthorization(true)
            setUser({
                username: data[i].username,
                role: data[i].role,
            })
            window.localStorage.setItem('user', JSON.stringify(user))
        }
    }
   }, [data, password, user, userName])


      return{authorization}
}

export default useCheckUser