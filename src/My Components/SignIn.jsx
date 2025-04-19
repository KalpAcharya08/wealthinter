import React, { useState } from "react";

const SignIn = () => {
  // State to store form inputs
  const [formData, setFormData] = useState({
    Account_Number: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or send data to the backend
    console.log("Form Data Submitted:", formData);

    // Reset the form
    setFormData({
      Account_Number: "",
      password: "",
    });
  };

  return (
    <div style={styles.container}>
      <h2>Account Details</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Email Input */}
        <div style={styles.inputGroup}>
          <label htmlFor="Account_Number" style={styles.label}>
            Account Number:
          </label>
          <input
            type="text"
            id="Account_Number"
            name="Account_Number"
            value={formData.Account_Number}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Password Input */}
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  );
};

// Inline Styles for Styling
const styles = {
  container: {
    maxWidth: "400px",
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
  button: {
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default SignIn;
