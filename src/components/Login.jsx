import React, { useState } from "react";

function Login({ onLogin }) {
  // useState hooks to manage name, email and error message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // simple function to check if email is in valid format
  const validateEmail = (email) => {
    return /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent page reload

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    // check email is correct or not
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // storing name and email to localStorage so we can remember later
    localStorage.setItem("username", name.trim());
    localStorage.setItem("useremail", email.trim());

    onLogin(name.trim());
  };

  return (
    <div className="login-container">
      <h1>Task Tracker</h1>
      {/* login */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)} // update name on typing
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // update email on typing
        />
        <button type="submit">Login</button>

        {/* if any error , button show*/}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
