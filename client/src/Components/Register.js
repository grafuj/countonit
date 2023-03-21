import React from 'react';

function Login(props) {
  // const {items} = props;
  return (
    <div>
      <form action="http://localhost:3000/items">
        <label><strong>Name</strong></label>
        <input type="name" name="name" id="name" />
        <br />
        <label><strong>Email</strong></label>
        <input type="email" name="email" id="email" />
        <br />
        <label><strong>Password</strong></label>
        <input type="password" name="password" id="password" />
        <br />
        <button type="submit" name="register" id="register-button">Register
        </button>
      </form>
    </div>
  );
}

export default Login;