
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import HomePage from './Pages/HomePage';
import { AuthContext } from './components/Auth/AuthContext';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';

function App() {
  const authCtx = useContext(AuthContext);
console.log(authCtx)

  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route
              path="/profile"
              element={
                authCtx.isLoggedIn ? (
                  <UserProfile />
                ) : (
                  <Navigate to="/auth" />
                )
              }
            />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;
