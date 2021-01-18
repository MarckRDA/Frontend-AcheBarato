import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Row, Col,Image } from 'react-bootstrap';
import { LoginButton, SigInButton } from "./menustyles";
import imagem from "../assets/logoicone.png";
import { Link } from 'react-router-dom';
import CarouselProducts from '../CarouselProducts/CarouselProducts.jsx';
import SearchBar from '../MenuSearchBar/SearchBar/SearchBar.jsx';
import {SearchBarStyled} from './menustyles.js';

const Navbarmenu = () => (
<>
<div class="menu">
  <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
    <img src={imagem} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#faf5f4tures">Outlet</Nav.Link>
        <Nav.Link href="#pricing">Best Offers</Nav.Link>
      
        <SearchBarStyled>
          <SearchBar/>
        </SearchBarStyled>
        
        <div style={{display:"flex"}}>
          <Link to='/Login'>
          <LoginButton variant="secondary">Login</LoginButton>
          </Link>
          </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
  
</>
)

export default Navbarmenu;