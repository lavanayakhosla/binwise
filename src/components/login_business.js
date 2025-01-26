import React, { useState } from "react";
import "./login.css"; // Import vanilla CSS file

// Function to handle login
export const handleLogin = (email, password) => {
  console.log(`Logging in with Email: ${email} and Password: ${password}`);
  // Add your API call or authentication logic here
};

const [showLogin, setShowLogin] = useState(false); // State for toggling login modal

  const handleLoginClick = () => {
    setShowLogin(true); // Show login modal
  };

  const handleCloseLogin = () => {
    setShowLogin(false); // Hide login modal
  };

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login-section">
      <h2>Schedule Pickup from Home / Business</h2>
      <h3>Login</h3>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="signup-link">
        Don't have an account? <a href="#signup">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginForm;

