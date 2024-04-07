import React, { createContext, useCallback, useContext, useState } from "react";

type AuthContextHandler = {
  isLoggedIn: boolean;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
};

const AuthContext = createContext({} as AuthContextHandler);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = useCallback((username = "", password = "") => {
    // call API and store based on resposnse
    setIsLoggedIn(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
