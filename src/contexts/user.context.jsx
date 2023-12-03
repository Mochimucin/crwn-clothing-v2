import { createContext, useState } from "react";

// as the actual value you want to access
export const UserContext = createContext({
  currentuser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentuser, setCurrentUser] = useState(null);
  const value = { currentuser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}