// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const response = await axios.get("https://localhost:4000/api/user/getuser", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUserData, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
