import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Login = () => <h2>Login Page</h2>;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <h1>React Router Example</h1>
        <nav>
          <Link to="/">Home</Link> |<Link to="/about">About</Link> |
          <Link to="/profile">Profile</Link> |<Link to="/login">Login</Link>
        </nav>
        <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={<Profile />}
              />
            }
          />
          <Route path="/user/:userId" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
