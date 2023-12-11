import { useContext } from "react";
import {Store} from "../context/store"

const useSideBarIndex = ()=>{
    const {sideBlock} = useContext(Store)

    return sideBlock
}

export default useSideBarIndex