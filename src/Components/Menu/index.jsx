import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Row, Col,Image } from 'react-bootstrap';
import { LoginButton, ContactButton } from "./menustyles";
import imagem from "../assets/logoicone.png";

const Navbarmenu = () => (

  <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
    <img src={imagem} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>

      </Nav>

      <Nav>
        <div style={{display:"flex"}}>
          <LoginButton variant="secondary">Login</LoginButton>
          <ContactButton variant="secondary">Contact</ContactButton>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

)

export default Navbarmenu;