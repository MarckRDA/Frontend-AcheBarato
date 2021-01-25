import React from "react";
import {Button,Nav,Form,FormControl,Navbar} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";




function NavBar() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const response = await axios.get(
        "https://localhost:5001/achebarato/users/467f1f82-f96e-4a1d-8fa0-304b3cbf882a"
      );

      setUser(response.data);
    }
    loadUser();
  }, []);
  

    return (
    <>    
      <Navbar sticky="top" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <p>Olá {user.name} ,tudo certo?</p>
    </Navbar.Brand>
    <Nav className="mr-auto" style={{}}>
      <Nav.Link href="#home">Produtos pesquisados</Nav.Link>
      <Nav.Link href="#features">Lista de desejos</Nav.Link>
      <Nav.Link href="#pricing">Histórico de Busca</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
    </>
  );
}
  
  export default NavBar;
  