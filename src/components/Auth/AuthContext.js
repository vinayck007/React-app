import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check local storage for an existing token when the component mounts
    const storedToken = localStorage.getItem('firebaseToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (userToken) => {
    setToken(userToken);
    // Save the token to local storage
    localStorage.setItem('firebaseToken', userToken);
  };

  const logout = () => {
    setToken(null);
    // Remove the token from local storage on logout
    localStorage.removeItem('firebaseToken');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
