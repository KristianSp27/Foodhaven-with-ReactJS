import { useState, createContext, useContext } from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userService.getUser());

  const login = async (email, password) => {
    try {
      const user = await userService.login(email, password);
      setUser(user);
      toast.success("Login successful!");
    } catch (err) {
      toast.error(err.response.data);
    }
  };
};
