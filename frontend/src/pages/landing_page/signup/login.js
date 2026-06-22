import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Best Practice: Use environment variables for API URLs in production
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";
      
      const { data } = await axios.post(
        `${apiUrl}/login`,
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      // Fallback error handling if the server is unreachable
      const errorMsg = error.response?.data?.message || "Something went wrong. Please try again.";
      handleError(errorMsg);
      console.error("Login Error:", error);
    } finally {
      setIsLoading(false);
      // Optional: Usually better UX to clear password but keep email on failure
      setInputValue((prevState) => ({
        ...prevState,
        password: "", 
      }));
    }
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center bg-light my-5">
      <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4 fw-bold">Login</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email Address
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              name="email"
              value={email}
              placeholder="name@example.com"
              onChange={handleOnChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="btn btn-primary btn-lg w-100 mb-3"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Logging in...
              </>
            ) : (
              "Submit"
            )}
          </button>

          {/* Footer Link */}
          <div className="text-center text-muted mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-decoration-none fw-semibold">
              Signup here
            </Link>
          </div>
        </form>
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default Login;