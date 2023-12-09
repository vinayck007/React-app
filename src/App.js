// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import Layout from './components/Layout/Layout';
import './App.css';
import UserProfile from './components/Profile/UserProfile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path='/profile' element={<UserProfile/>}/>
      </Routes>
      </Layout>
    </Router>
  );
}


export default App;
