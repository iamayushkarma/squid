import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "@/types/user.ts";
import {
  getToken,
  setToken,
  logoutUser,
  setUser,
  getUser,
} from "@/utils/auth.ts";

type AuthContextProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(getToken()));

  // user signup
  const signup = (user: User) => {
    setUser(user);
    setToken();
    setIsAuthenticated(true);
  };
  // user login
  const login = (email: string, password: string) => {
    const storedUser = getUser();

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setToken();
      setIsAuthenticated(true);
      return true;
    }

    return false;
  };

  // user logout
  const logout = () => {
    logoutUser();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
