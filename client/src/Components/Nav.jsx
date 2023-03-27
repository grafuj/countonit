import React, {useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import Editmodal from './Items/edit-modal/Editmodal';
import Form from "./Items/Form";


// need to check state or context for user for conditional rendering
// const user = { name: "Bob" }; //test with user
const user = null;  //test without user

function Nav(props) {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});
  const location = useLocation();
  const url = location.pathname
  const { departments, items } = props;
  
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
        <Link to="/departments" className="nav-span">Folders</Link>
        <span>
        {(url !== "/login" && url !== "/register") && (<span onClick={() => setShow(true)} className='nav-span nav-new-item' >
            <FontAwesomeIcon icon="fa-circle-plus" style={{color: "#ffffff",}}/>
            <span> Add New Item</span>
            <Editmodal className="nav-modal" onClose={() => setShow(false)} show={show}>
              <Form
              items={items}
              departments={departments}
              onClose={() => setShow(false)}
              setItem={setItem}
              />
            </Editmodal>
          </span>)}
          {/* <button
            type="button"
            className="delete-icon"
            onClick={() => setShow(true)}
          >
          <FontAwesomeIcon icon="fa-circle-plus" style={{color: "#ffffff",}}/>
            Add New Item
          </button> */}
            
            {/* <Editmodal onClose={() => setShow(false)} show={show}>
              <Form
              // items={items}
              departments={departments}
              onClose={() => setShow(false)}
              setItem={setItem}
              />
            </Editmodal> */}
        </span>
        {/* <Link to="/items/new" className="nav-span">Items</Link> */}
      </div>
      <div>
        <>
        {(url !== "/login" && url !== "/register") && (
          <div className="nav-user-check">
            <h3 className="nav-span">Hello Bob!</h3>
            <Link to="/login" className="nav-span">Logout</Link>
          </div>
        )}
        {(url === "/login" || url === "/register") && (
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
