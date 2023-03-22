import React from 'react';
// import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// need to check state or context for user for conditional rendering
// const user = { name: "Bob" }; //test with user
const user = null;  //test without user

function Nav(props) {
  // const {} = props;
  return (
    <nav>
      <div class="site-logo">
        <h1 class="site-logo-text">Count on it</h1>
      </div>
      <div>
        <Link to="/items" class="nav-span">Items</Link>
        <Link to="/folders" class="nav-span">Folders</Link>
        <Link to="/departments" class="nav-span">Departments</Link>
        <Link to="/dashboard" class="nav-span">Dashboard</Link>
      </div>
      <div>
        <>
        {user && (
          <div class="nav-user-check">
            <h4 class="nav-welcome">Hello {user.name}!</h4>
            <Link to="/logout" class="nav-span">Logout</Link>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/login" class="nav-span">Login</Link>
            <Link to="/register" class="nav-span">Register</Link>
          </div>
        )}
        </>
      </div>
    </nav>
  );
}

export default Nav;
