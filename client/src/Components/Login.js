import React from "react";
import { useNavigate } from "react-router-dom";
import writing from "./Front-End-Photos/writing-on-paper.webp";

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
      <div>
        <img src={writing} className="login-image" alt="writing-in-planner" />
      </div>
      <div className="login-form-fields">
        <form action="http://localhost:3000/items">
          <h1 className="login-text">Welcome!</h1>
          <br />
          <h2 className="login-text">Login</h2>
          <label className="login-text">
            <strong>Username</strong>
          </label>
          
          <input type="email" name="email" id="email" size="30" />
          <br />
          <label className="login-text">
            <strong>Password</strong>
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
          <h2 className="login-text">
            Sign up for an account here:
          </h2>
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
