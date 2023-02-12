import { useState, useCallback } from "react";

const useCheckUser = () => {

    const [permission, setPermission] = useState()
let hidden


      return{hidden, permission}
}

export default useCheckUser