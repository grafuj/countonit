import React from "react";
import { useNavigate } from "react-router-dom";
import welcome2 from "./Front-End-Photos/welcome2.jpeg";

function Login(props) {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-form">
      <span className="login-image-box">
        <img src={welcome2} className="login-image" alt="welcome2" />
      </span>
      <h1 className="login-text">Welcome!</h1>
      <div className="login-form-fields">
        <form className="login-form-box" action="http://localhost:3000/items">
          <br />
          <h2 className="login-text">Login</h2>
          <label className="login-text">
            <a>Email</a>
          </label>

          <input type="email" name="email" id="email" size="30" />
          <br />
          <label className="login-text">
            <a>Password</a>
          </label>

          <input type="password" name="password" id="password" size="30" />
          <br />
          <button
            type="submit"
            name="login"
            id="login-button"
            onClick={handleLoginClick}
            className="login-text"
          >
            Login
          </button>
          <br />
          <br />
          <br />
          <h2 className="login-text">Sign up for an account here:</h2>
          <button
            type="submit"
            className="login-text"
            onClick={handleRegisterClick}
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
