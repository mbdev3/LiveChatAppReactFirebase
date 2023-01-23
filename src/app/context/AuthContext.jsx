import { createContext, useEffect, useState, useContext } from 'react';
import { auth } from 'firebase_/firebase';
import { onAuthStateChanged } from 'firebase/auth';
const initialState = {};
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, initialState, useAuthContext };
