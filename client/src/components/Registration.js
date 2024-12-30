import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [firstName, setFirstName] = useState(""); // Initialize state for firstName
  const [lastName, setLastName] = useState(""); // Initialize state for lastName
  const [mobileNumber, setMobileNumber] = useState(""); // Initialize state for mobileNumber
  const [password, setPassword] = useState(""); // Initialize state for password
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    try {
      const response = await axios.post("http://localhost:5000/register", {
        firstName,
        lastName,
        mobileNumber,
        password,
      });

      if (response.status === 201) {
        alert("Registration successful!");
        navigate("/login");
      }
    } catch (err) {
      console.error("Error during registration:", err);
      if (err.response && err.response.data.message) {
        alert(`Error: ${err.response.data.message}`);
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="registration-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} // Update firstName state
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} // Update lastName state
            required
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)} // Update mobileNumber state
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
