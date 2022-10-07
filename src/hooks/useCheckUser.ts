import { useState, useEffect, useCallback } from "react";

const useCheckUser = () => {
    const [user, setUser] = useState("");
    const [hidden, setHidden] = useState(true);



    useEffect(()=>{
        if (window.localStorage.getItem('user') !== null) {
            //@ts-ignore
            setUser(JSON.parse(localStorage.getItem('user')).username)
            setHidden(false)
        }
    },[])

      return{user, hidden}
}

export default useCheckUser