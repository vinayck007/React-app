// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem('firebaseToken');
  const [token, setToken] = useState(storedToken || '');
  const [isLoggedIn, setIsLoggedIn] = useState(!!storedToken);

  useEffect(() => {
    // Update local storage when token changes
    localStorage.setItem('firebaseToken', token);
    setIsLoggedIn(!!token);
  }, [token]);

  const login = (userToken) => {
    setToken(userToken);
  };

  const logout = () => {
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
