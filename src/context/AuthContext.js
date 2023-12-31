import { Token } from "@/api/token";
import { User } from "@/api/user";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const tokenCtrl = new Token()
const userCtrl = new User()

export const AuthProvider = ({ children }) => {



    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      (async () => {
        const token = tokenCtrl.getToken()

        if(!token) {
          logout()
          setLoading(false)
          return
        }

        if(tokenCtrl.hasExpired(token)) {
          logout()
        } else {
          await login(token)
        }
      })()
    }, [])
    

    const login = async (token) => {
        try {
            // console.log(token);
            tokenCtrl.setToken(token)
            const response = await userCtrl.getMe(token)
            setUser(response)
            setToken(token)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    const logout = () => {
      // console.log("Cerrar sesion");
      tokenCtrl.removeToken()
      setToken(null)
      setUser(null)
    }

    const updateUser = (key, value) => {
      setUser({
        ...user,
        [key]: value
      })
    }

  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser
  };


  if(loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};


