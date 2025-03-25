import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
  const [user, setUser] = useState(() => {
    return JSON.parse(sessionStorage.getItem("user")) || null;
  });
  useEffect(() => {
    console.log("User state updated:", user);
  }, [user]);
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/signIn", { email, password });

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("user", JSON.stringify(res.data.user)); // Store full user data
      setUser(res.data.user); // Update state
      console.log(user,res.data.token)
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
