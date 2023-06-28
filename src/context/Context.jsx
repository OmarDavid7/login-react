import { createContext, useCallback, useContext, useMemo, useState } from "react";

const AuthContext = createContext();
const Autenticacion = "Welcome Bitch";

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAutenticated] = useState(window.localStorage.getItem(Autenticacion) ?? false);

  const login = useCallback(() => {
    window.localStorage.setItem(Autenticacion, true);
    setIsAutenticated(true);
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(Autenticacion);
    setIsAutenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [login, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//custom hook 
export function useAuthContext(){
    return useContext(AuthContext);
}

export default AuthContextProvider;