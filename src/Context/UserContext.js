import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const user = {
    name: "jesse",
    job: "tech",
  };
  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
};
