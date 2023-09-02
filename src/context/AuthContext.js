import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const data = {
    accessToken: null,
    user: null,
    login: null,
    logout: null,
    updateUser: null
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};


