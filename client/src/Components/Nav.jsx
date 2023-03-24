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
      <div className="site-logo" >
        <Link to="/" className="site-logo-text">Count on it</Link>
      </div>
      <div>
        <Link to="/items/new" className="nav-span">Items</Link>
        <Link to="/folders" className="nav-span">Folders</Link>
        <Link to="/departments" className="nav-span">Departments</Link>
        <Link to="/dashboard" className="nav-span">Dashboard</Link>
      </div>
      <div>
        <>
        {user && (
          <div className="nav-user-check">
            <h4 className="nav-welcome">Hello {user.name}!</h4>
            <Link to="/logout" className="nav-span">Logout</Link>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/login" className="nav-span">Login</Link>
            <Link to="/register" className="nav-span">Register</Link>
          </div>
        )}
        </>
      </div>
    </nav>
  );
}

export default Nav;
