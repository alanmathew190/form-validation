import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let validationErrors = {};
    const emailPattern = /\S+@\S+\.\S+/;

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

     if (!formData.password) {
       validationErrors.password = "Password is required";
     } else if (formData.password.length < 6) {
       validationErrors.password ="Password must be at least 6 characters long";
     }


    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login successful!");
      console.log(formData);
    } else {
      alert("Please fix the errors");
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="loginDiv">
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

          {/* Password */}
          <br></br>
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter a password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <label class="passl" onClick={togglePasswordVisibility} type="button">
            {showPassword ? "Hide" : "Show"}
          </label>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
