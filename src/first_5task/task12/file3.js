// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider, AuthContext } from './file1'; // Import AuthContext and AuthProvider
import ProtectedRoute from './file2';
import ItemList from './file4'; // Your component for displaying items
import Login from './file5'; // Your login component

const App = () => {
  const { logout } = useContext(AuthContext); // Use useContext to get the logout function

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/items">Items</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/items"
            element={
              <ProtectedRoute>
                <ItemList />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<h1>Welcome to the App</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

const MainRoot = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default MainRoot;
