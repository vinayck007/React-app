
import React from 'react';
import { useAuth } from '../../AuthContext';

const LogoutButton = () => {
  const { logout } = useAuth(); // Access logout function from context

  const handleLogout = () => {
    // Perform any additional cleanup or API calls if needed
    logout(); // Clear the token using the context
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
