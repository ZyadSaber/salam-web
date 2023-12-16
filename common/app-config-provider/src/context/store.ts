import { createContext } from "react";
import { initialContextValues } from "../constants";

export const Store = createContext({
  state: initialContextValues,
  setAuthValues: (state: typeof initialContextValues) => state,
});
