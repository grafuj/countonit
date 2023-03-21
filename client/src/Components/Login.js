import React from 'react';

function Login(props) {
  // const {items} = props;
  return (
    <div>
      <form action="http://localhost:3000/items">
        <label><strong>Username</strong></label>
        <input type="email" name="email" id="email" />
        <br />
        <label><strong>Password</strong></label>
        <input type="password" name="password" id="password" />
        <br />
        <button type="submit" name="login" id="login-button">Login
        </button>
      </form>
    </div>
  );
}

export default Login;