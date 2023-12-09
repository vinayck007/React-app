// AuthForm.js
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    // Simulate a delay (you can replace this with your actual API call)
    setTimeout(() => {
      // Simulate signup failure
      setIsLoading(false);
      setFeedback('Signup failed. Please try again.'); // Set the feedback message
    }, 2000);
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
