import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LoginButton, SigInButton, LogOutButton } from "./menustyles";
import imagem from "../assets/logoicone.png";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../MenuSearchBar/SearchBar/SearchBar.jsx";
import { SearchBarStyled } from "./menustyles.js";
import useAuth from "../../Context/hooks/useAuth";


const Navbarmenu = () => {
  const { isAuthenticated, user, signOut } = useAuth();
  const location = useLocation();

  console.log(location.pathname);

  return (
    <>
      <div class="menu" style={{ backgroundColor: "#f48221" }}>
        <Navbar collapseOnSelect expand="xl" variant="dark">
          <Navbar.Brand>
            <Link to="/MainPage">
              <img src={imagem} alt="Brand" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/PriceAvarege?search=MLB1649">
                  Computadores
                </NavDropdown.Item>
                <NavDropdown.Item href="/PriceAvarege?search=MLB11172">
                  Consoles
                </NavDropdown.Item>
                <NavDropdown.Item href="/PriceAvarege?search=MLB1055">
                  Celulares e Smartphones
                </NavDropdown.Item>
                <NavDropdown.Item href="/PriceAvarege?search=MLB1002">
                  Televisores
                </NavDropdown.Item>
                <NavDropdown.Item href="/PriceAvarege?search=MLB437616">
                  Livros
                </NavDropdown.Item>
                <NavDropdown.Item href="/PriceAvarege?search=MLB269589">
                  Elétricos
                </NavDropdown.Item>
                <NavDropdown.Item href="/PriceAvarege?search=MLB1646">
                  Ar Condicionado
                </NavDropdown.Item>
                <NavDropdown.Item href="/PriceAvarege?search=MLB3853">
                  Outros
                </NavDropdown.Item>
              </NavDropdown>
              {location.pathname === "/MainPage" ? (
                <span style={{width: "48rem", marginLeft: "-11rem"}}></span>
              ) : (
                <>
                  <SearchBarStyled>
                    <SearchBar />
                  </SearchBarStyled>
                </>
              )}

              <div style={{ display: "flex"}}>
                {isAuthenticated ? (
                  <>
                    <p>Olá {user.name.split(" ")[0]}</p>
                    <LogOutButton onClick={signOut}>Logout</LogOutButton>
                  </>
                ) : (
                  <>
                    <Link to="/Login">
                      <LoginButton variant="secondary">Login</LoginButton>
                    </Link>
                    <Link to="/SignUp">
                      <SigInButton variant="secondary">Register</SigInButton>
                    </Link>
                  </>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Navbarmenu;
