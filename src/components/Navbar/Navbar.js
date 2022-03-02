import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Redirect, Route, NavLink, Link } from "react-router-dom";


function Homebar() {
  return (
    <div>
      
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/home">SimuVerse</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="me-auto justify-content-end ml-auto">
        <Nav.Link href="/home" >Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/team">Team</Nav.Link>
        <Nav.Link href="/tryOn">Try On</Nav.Link>
        
        
      </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Homebar