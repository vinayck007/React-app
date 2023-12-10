import { useState, useRef } from 'react';
import classes from './ChangePasswordForm.module.css';

const ChangePasswordForm = () => {
  const newPasswordRef = useRef();
  const [feedback, setFeedback] = useState(null);

  const changePassword = async (newPassword) => {
    try {
      const idToken = localStorage.getItem('firebaseToken');

      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBcXaTkdRyb--LJgi1urut9jM9gdsSDpOM`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            idToken: idToken,
            password: newPassword,
            returnSecureToken: true,
          }),
        }
      );

      if (response.ok) {
        // Password changed successfully
        setFeedback('Password changed successfully');
      } else {
        const data = await response.json();
        // Handle specific error messages from Firebase
        setFeedback(data.error.message || 'Password change failed');
      }
    } catch (error) {
      // Handle network or other errors
      setFeedback('An error occurred. Please try again.');
      console.error(error.message);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newPassword = newPasswordRef.current.value;
    changePassword(newPassword);
  };

  return (
    <div className={classes['change-password-form']}>
      <h3>Change Password</h3>
      {feedback && <p className={classes.feedback}>{feedback}</p>}
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="new-password">New Password</label>
          <input type="password" id="new-password" required ref={newPasswordRef} />
        </div>
        <div className={classes.actions}>
          <button type="submit">Change Password</button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
