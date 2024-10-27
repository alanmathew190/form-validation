import React, { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const validateForm = () => {
    let validationErrors = {};

    if (!formData.username) {
      validationErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      validationErrors.username = "Username must be at least 3 characters";
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Signup successful!");
      console.log(formData);
    } else {
      alert("Please fix the errors before submitting");
    }
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="loginDiv">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}
          {/* Email */}
          <br></br>
          <label>Email:</label>
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <br></br>

          <div class="password">
            {/* Password */}
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter a password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <label
              class="pass"
              onClick={togglePasswordVisibility}
              type="button"
            >
              {showPassword ? "Hide" : "Show"}
            </label>
            {errors.password && <p className="errorpp">{errors.password}</p>}
          </div>
          <br></br>
          {/* Confirm Password */}
          <div class="password">
            <label>Confirm Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <label
              class="pass"
              onClick={togglePasswordVisibility}
              type="button"
      
            >
              {showPassword ? "Hide" : "Show"}
            </label>

            {errors.confirmPassword && (
              <p className="errorpp">{errors.confirmPassword}</p>
            )}
          </div>
          <br></br>
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;
