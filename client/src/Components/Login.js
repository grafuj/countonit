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
    <div class="login-form">
      <div>
        <img src={writing} className="login-image" alt="writing-in-planner" />
      </div>
      <div class="login-form-fields">
        <form action="http://localhost:3000/items">
          <h1>Welcome!</h1>
          <br />
          <h2>Login</h2>
          <label>
            <strong>Username</strong>
          </label>
          <br />
          <input type="email" name="email" id="email" size="30" />
          <br />
          <label>
            <strong>Password</strong>
          </label>
          <br />
          <input type="password" name="password" id="password" size="30" />
          <br />
          <button
            type="submit"
            name="login"
            id="login-button"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <br />
          <h3>Sign up for an account here:</h3>
          <button
            type="submit"
            className="register"
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
