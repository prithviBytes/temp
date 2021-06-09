import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem(user));
    if (storeData) {
      setUser(storeData);
      setLoggedIn(true);
    }
  }, []);
  async function register(email, username, password) {
    console.log("Registeriinng");
    const user = {
      email: "user@user.com",
      username: "user",
      password: "password"
    };
    try {
      const response = await axios.post(
        "https://Video-Library-Backend.prithvibytes.repl.co/user/register",
        user
      );
      setUser(response.data);
      setLoggedIn(true);
      return true;
    } catch (error) {
      return false;
    }
  }
  async function login(email, password) {
    const user = {
      email: "user@user.com",
      password: "password"
    };
    try {
      const response = await axios.post(
        "https://Video-Library-Backend.prithvibytes.repl.co/user/login",
        user
      );
      setUser(response.data);
      localStorage.setItem(JSON.stringify(response.data), user);
      isLoggedIn(true);
      return true;
    } catch (error) {
      return false;
    }
  }
  const value = {
    register,
    login,
    isLoggedIn
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
