import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from '../assets/logo.svg'; // Import your logo image

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand href="#home" aria-label="My Petstore">
        {/* <img
          src={logo}
          alt="My Petstore Logo"
          height="30"
          className="d-inline-block align-top"
        /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle Navigation Menu" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" aria-label="Home">Home</Nav.Link>
          <Nav.Link href="#about" aria-label="About">About</Nav.Link>
          <Nav.Link href="#services" aria-label="Services">Services</Nav.Link>
          <Nav.Link href="#contact" aria-label="Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
