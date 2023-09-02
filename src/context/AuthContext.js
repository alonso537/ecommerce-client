import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setLoading(false)
    }, [])
    

    const login = async (token) => {
        try {
            // console.log(token);
            setUser({email: 'fuxyzone@gmail.com'})
            setToken(token)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

  const data = {
    accessToken: token,
    user,
    login,
    logout: null,
    updateUser: null
  };


  if(loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};


