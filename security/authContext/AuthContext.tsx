import React, { createContext, useCallback, useContext, useState } from "react";
import { POST } from "../../adapters/http.adapter";
import { setToken } from "../../common/getSetToken";

type AuthContextHandler = {
  user: User | null;
  isLoggedIn: boolean;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
};

type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

const AuthContext = createContext({} as AuthContextHandler);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = useCallback(async (email = "", password = "") => {
    // call API and store based on resposnse
    try {
      const response = await POST("/auth/login", { email, password });
      console.log("hl response", response);
      if (response.data.token) {
        const token = response.data.token;
        // save the token
        await setToken(token);
        setUser(response.data.user);
        setIsLoggedIn(true);
      } else {
        // Authentication failed
        console.error("Login failed:", response);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
    setIsLoggedIn(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};