import { API_ID } from "@commons/global";

interface prop{
    link: keyof typeof API_ID;
}

const useBaseAppUrl = ({link}:prop)=>{

    const url = `http://192.168.1.250:5000/api/${API_ID[link]}`

    return url
}

export default useBaseAppUrl