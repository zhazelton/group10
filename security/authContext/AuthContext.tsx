import React, { createContext, useCallback, useContext, useState } from "react";
import { GET, POST } from "../../adapters/http.adapter";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { setToken } from "../../common/getSetToken";

type AuthContextHandler = {
  user: User | null;
  isLoggedIn: boolean;
  handleLogin: (email: string, password: string) => void;
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

    const response = await POST("/auth/login", {
      email,
      password,
    });
    console.log("response auth:>> ", response);
    console.log("response user:>> ", response.user);
    console.log("response token:>> ", response.token);

    if (response.token) {
      // const token = response.token;
      // setUser(response.user);

      await setToken(response.token);

      setIsLoggedIn(true);
      setUser(response.user);
    } else {
      console.error("Token not found in login response:", response);
    }

    // await AsyncStorage.setItem("token", response.token);
    // await setToken(response.token);
    // setUser({ token: response.token });

    // console.log("Error sign in", err);
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
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
