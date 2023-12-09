
import React from 'react';
import AuthForm from '../Auth/AuthForm';
import { Link } from 'react-router-dom';

const StartingPage = () => {
  return (
    <div>
      <h1>Welcome to Our App</h1>
      <AuthForm />
    </div>
  );
};

export default StartingPage;
