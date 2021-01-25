import React from "react";
import {Button,Nav,Form,FormControl,Navbar} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";




function NavBar() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const response = await axios.get(
        "https://localhost:5001/achebarato/users/7afc143f-42db-4753-a4cf-f9ad1a082c6d"
      );

      setUser(response.data);
    }
    loadUser();
  }, []);
  console.log(user);
  

    return (
    <>    
      <Navbar sticky="top" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      nome usuario 
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
  