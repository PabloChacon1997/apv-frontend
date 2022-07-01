import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import clienteAxios from '../config/axios'


const AuthContext = createContext()


const AuthProvider = ({children}) => {

  const [cargando, setCargando] = useState(true)
  const [auth, setAuth] = useState({})

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem('token')
      if(!token) {
        setCargando(false)
        return
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      try {
        const { data: { veterinario } } = await clienteAxios('/veterinarios/perfil',config)
        setAuth(veterinario);
      } catch (error) {
        console.log(error.response.data.msg);
        setAuth({})
      }

      setCargando(false)
    }
    autenticarUsuario()
  }, [])

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    setAuth({})
  }
  

  return(
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
        cerrarSesion
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}


export {
  AuthProvider
}


export default AuthContext