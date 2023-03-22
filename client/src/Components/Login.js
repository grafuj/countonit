import React from 'react';
import writing from "./Front-End-Photos/writing-on-paper.webp";

function Login(props) {
  // const {items} = props;
  return (
    <div class="login-form">
      <div>
        <img src={writing} class="login-image" alt="writing-in-planner" />
      </div>
      <div class="login-form-fields">
        <form action="http://localhost:3000/items">
          <h2>Login</h2>
          <label><strong>Username</strong></label>
          <br />
          <input type="email" name="email" id="email" size="30" />
          <br />
          <label><strong>Password</strong></label>
          <br />
          <input type="password" name="password" id="password" size="30" />
          <br />
          <button type="submit" name="login" id="login-button">Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;