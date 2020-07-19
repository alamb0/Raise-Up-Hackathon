import React from 'react';
import {Link} from 'react-router-dom'
// import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/icon.png'
function Header() {
  return (
    <>
        <Navbar>
            <Navbar.Brand>
              <Link to="/" style={{color: 'black', textDecoration: 'none'}}>
                <img src={logo} />
                Volunteer Match Depot
              </Link>
            </Navbar.Brand>
        </Navbar>
    </>
  );
}

export default Header;
