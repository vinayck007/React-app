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
    const handleAutoLogout = () => {
      const inactivityTimeout = setTimeout(() => {
        logout();
      }, 20000); 

      return () => {
        clearTimeout(inactivityTimeout);
      };
    };

    if (isLoggedIn) {
      handleAutoLogout(); 
    }

  }, [token, isLoggedIn]);

  const login = (userToken) => {
    setToken(userToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setToken('');
    setIsLoggedIn(false);
    localStorage.removeItem('firebaseToken');
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
