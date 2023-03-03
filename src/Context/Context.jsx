import { createContext } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = (props) =>{
    return (
<GlobalContext.Provider  value={"TEST ABC"}>
    {props.children}
</GlobalContext.Provider>
    )
}