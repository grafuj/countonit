import React from 'react';
// import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

// need to check state or context for user for conditional rendering
// const user = { name: "Bob" }; //test with user
const user = null;  //test without user

function Nav(props) {
  return (
    <nav>
     <span className='earth-icon'> 
     <FontAwesomeIcon icon={faEarthAmericas} size="2xl" style={{color: "#ffffff",}} />  
     </span>
      <div className="site-logo" >
        <Link to="/" className="site-logo-text">Count On It</Link>
      </div>
      <div className='nav-links'>
        <Link to="/dashboard" className="nav-span">Dashboard</Link>
        <Link to="/folders" className="nav-span">All Items</Link>
        <Link to="/departments" className="nav-span">Organization</Link>
        <span>
          <Link className='nav-span nav-new-item' to="/items/new">
            <FontAwesomeIcon icon="fa-circle-plus" style={{color: "#ffffff",}}/>
            <span>Add New Item</span>
          </Link>
        </span>
        {/* <Link to="/items/new" className="nav-span">Items</Link> */}
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
            <Link to="/login" className="nav-span login-register">Login</Link>
            <Link to="/register" className="nav-span">Register</Link>
          </div>
        )}
        </>
      </div>
    </nav>
  );
}

export default Nav;
