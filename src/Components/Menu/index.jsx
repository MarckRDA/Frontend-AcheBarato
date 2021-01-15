import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Row, Col,Image } from 'react-bootstrap';
import { LoginButton, SigInButton } from "./menustyles";
import imagem from "../assets/logoicone.png";
import { Link } from 'react-router-dom'

const Navbarmenu = () => (
<>
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
        <Link to='/Login'>
          <LoginButton variant="secondary">Login</LoginButton>
          </Link>
          <Link to='/FormRegister'>
          <SigInButton variant="secondary">Register</SigInButton>
          </Link>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</>
)

export default Navbarmenu;