// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
console.log(isLoggedIn)
useEffect(() => {
  console.log('useEffect triggered. isLoggedIn:', isLoggedIn);
  const storedToken = localStorage.getItem('firebaseToken');
  if (storedToken) {
    setIsLoggedIn(true);
  }
}, [isLoggedIn]);


  const login = (userToken) => {
    setIsLoggedIn(true);
    localStorage.setItem('firebaseToken', userToken);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('firebaseToken');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
