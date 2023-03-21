import React from 'react';
// import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// need to check state or context for user for conditional rendering
const user = { name: "Bob" };

function Nav(props) {
  // const {} = props;
  return (
    <nav>
      <div>
        <h1>Count on it</h1>
      </div>
      <div>
        <span>
          <Link to="/items">Items</Link>
          <Link to="/folders">Folders</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/dashboard">Dashboard</Link>
        </span>
      </div>
      <div>
        <span>
          <h5>Welcome {user.name}!</h5>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/register">Register</Link>
        </span>
      </div>

    </nav>
  );
}

export default Nav;
