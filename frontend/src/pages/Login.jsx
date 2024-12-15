import React, { useState } from 'react';
import './Login.scss';
import Button from '../components/Button';
import InputField from '../components/InputField';

const Login = () => {
  // State to hold email, password, and any error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Log email and password to see if they are captured
    console.log("Email:", email, "Password:", password);  // Debugging logs

    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Ensure email and password are sent correctly
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data.token);
        // Store the token in localStorage
        localStorage.setItem("token", data.token);
        const decodedToken = JSON.parse(atob(data.token.split('.')[1]));
        const role = decodedToken.role;
        if (role === "user") {
          window.location.href = "/user-dashboard"; // Redirect to User Dashboard
        } else if (role === "admin") {
          window.location.href = "/admin-dashboard"; // Redirect to Admin Dashboard
        }
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome to inSight</h1>
        <p className="login-description">
          Streamlined Parking and Security Management for Modern Facilities.
        </p>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}  // Correctly bind to the email state
            onChange={(e) => setEmail(e.target.value)}  // Update email state on change
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}  // Correctly bind to the password state
            onChange={(e) => setPassword(e.target.value)}  // Update password state on change
          />
          <Button text="Log In" type="submit" />
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="login-footer">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
