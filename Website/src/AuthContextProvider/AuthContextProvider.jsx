import React from "react";
import { createContext } from "react";
export const AuthContext = createContext();
export default function AuthContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const login = () => {
    setIsAuthenticated(true);
  };
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
}
