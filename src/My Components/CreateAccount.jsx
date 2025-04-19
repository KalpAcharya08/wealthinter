import React, { useState } from "react";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    aadhaarNumber: "",
    otp: "",
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Account Created Successfully!");
  };

  return (
    <div style={styles.container}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* First Name */}
        <div style={styles.inputGroup}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Last Name */}
        <div style={styles.inputGroup}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Email */}
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Password */}
        <div style={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Confirm Password */}
        <div style={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Aadhaar Number */}
        <div style={styles.inputGroup}>
          <label htmlFor="aadhaarNumber">Aadhaar Number:</label>
          <input
            type="text"
            id="aadhaarNumber"
            name="aadhaarNumber"
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* OTP */}
        <div style={styles.inputGroup}>
          <label htmlFor="otp">OTP:</label>
          <input
            type="text"
            id="otp"
            name="otp"
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Captcha */}
        <div style={styles.inputGroup}>
          <label htmlFor="captcha">Captcha:</label>
          <input
            type="text"
            id="captcha"
            name="captcha"
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.submitButton}>
          Create Account
        </button>
      </form>
    </div>
  );
};

// Inline Styles for Styling
const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  submitButton: {
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default CreateAccount;