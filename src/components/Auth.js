import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store/index';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        {isAuthenticated ? (
          // Render user profile when isAuthenticated is true
          <div>
            <h2>User Profile</h2>
            <button onClick={() => dispatch(authActions.logout())}>Logout</button>
          </div>
        ) : (
          // Render login form when isAuthenticated is false
          <form>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <button type='button' onClick={loginHandler}>
              Login
            </button>
          </form>
        )}
      </section>
    </main>
  );
};

export default Auth;
