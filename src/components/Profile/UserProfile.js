
import React from 'react';
import { useAuth } from '../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import ChangePasswordForm from '../Auth/ChangePasswordForm'
import classes from './UserProfile.module.css'

const UserProfile = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the logout function from your AuthContext or wherever you manage authentication
    logout();

    // Navigate to the home page or login page after logging out
    navigate('/');
  };

  return (
    <div className={classes['profile-container']}>
      <div className={classes['profile-content']}>
        <h2>User Profile</h2>
        <p>Welcome</p>
        <ChangePasswordForm/>
        <button onClick={handleLogout}>Logout</button>
    </div>
    </div>
  );
};

export default UserProfile;
