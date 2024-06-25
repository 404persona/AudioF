import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  userData: null,
  setUserData: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // Replace with your login logic
  const handleLogin = async (username, password) => {
    // Simulate login (replace with actual API call)
    const response = {
      success: true,
      data: {
        id: 1,
        username: username,
        profilePicUrl: "https://via.placeholder.com/150", // Placeholder image
      },
    };

    if (response.success) {
      setIsLoggedIn(true);
      setUserData(response.data);
    } else {
      // Handle login failure
      console.error("Login failed");
    }
  };

  useEffect(() => {
    // Check for existing login state (optional)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, handleLogin, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
