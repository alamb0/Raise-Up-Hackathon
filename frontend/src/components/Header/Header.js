import React from 'react';
// import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/icon.png'
function Header() {
  return (
    <>
        <Navbar>
            <Navbar.Brand>
              <img src={logo} />
              Volunteer Match Depot
            </Navbar.Brand>
        </Navbar>
    </>
  );
}

export default Header;
