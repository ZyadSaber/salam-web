import { API_ID } from "@commons/global";

interface prop{
    link: keyof typeof API_ID;
}

const useBaseAppUrl = ({link}:prop)=>{

    const url = `http://144.24.209.19:9090/api/${API_ID[link]}`

    return url
}

export default useBaseAppUrl