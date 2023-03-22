import React from 'react';
import planner from "./Front-End-Photos/pencil-on-daytimer.jpeg";


function Login(props) {
  // const {items} = props;
  return (
    <div class="register-form">
      <div>
        <img src={planner} class="register-image" alt="writing-in-planner" />
      </div>
      <div class="register-form-fields">
        <form action="http://localhost:3000/items">
          <h2>Register</h2>
          <label><strong>Name</strong></label>
          <br />
          <input type="name" name="name" id="name" />
          <br />
          <label><strong>Email</strong></label>
          <br />
          <input type="email" name="email" id="email" />
          <br />
          <label><strong>Password</strong></label>
          <br />
          <input type="password" name="password" id="password" />
          <br />
          <button type="submit" name="register" id="register-button">Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;