// AuthForm.js
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './AuthForm.module.css';
import { useAuth } from './AuthContext';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const {login} = useAuth()
  const navigate = useNavigate()

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:${
          isLogin ? 'signInWithPassword' : 'signUp'
        }?key=AIzaSyBcXaTkdRyb--LJgi1urut9jM9gdsSDpOM`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || 'Authentication failed!');
      }

      // Handle successful login/signup
      login(data.idToken)
      navigate('/profile')
      console.log(data);
    } catch (error) {
      setFeedback(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {feedback && <p className={classes.feedback}>{feedback}</p>}
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing Up...' : isLogin ? 'Login' : 'Create Account'}
          </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin
              ? 'Create New Account'
              : 'Login With Existing Account'}
          </button>
          {isLoading && <div className={classes['loading-spinner']}></div>}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
