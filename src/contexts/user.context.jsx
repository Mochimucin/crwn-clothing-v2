import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
// as the actual value you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentuser: null,
});

export const UserProvider = ({ children }) => {
  const [currentuser, setCurrentUser] = useState(null);
  const value = { currentuser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}