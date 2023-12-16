import { useContext } from "react";
import { Store } from "../context/store";

const useAppConfig = () => useContext(Store);

export default useAppConfig;
