import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" aria-label="My Website">My Website</Navbar.Brand>
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
