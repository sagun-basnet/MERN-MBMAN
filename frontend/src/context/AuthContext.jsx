import axios from "axios";
import { createContext, useState } from "react";
import Cookies from "js-cookie";
import { post } from "../utils/api";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")),
  );

  const login = async (data) => {
    const res = await post("/auth/login", data)
    console.log(res);
    setCurrentUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    Cookies.set("accessToken", res.data.token);
    return res;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    Cookies.remove("accessToken");
  };

  return (
    <AuthContext.Provider value={{ login, currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
