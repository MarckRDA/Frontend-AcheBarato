import React from "react";
import {
  Dropdown,
  DropdownButton,
  Form,
  Button,
  FormControl,
  Navbar,
  InputGroup,
} from "react-bootstrap";
import CarouselProdutos from "./CarouselProdutos";
import Carrousel from "./Carrousel";

function MainPage() {
  return (
    <div>
      <Navbar variant="dark" style={{ backgroundColor: "darkorange" }}>
        <DropdownButton
          variant="link"
          id="dropdown-item-button"
          title="Ache Barato"
        >
          <Dropdown.Item as="button">Eletrônicos</Dropdown.Item>
          <Dropdown.Item as="button">Celulares</Dropdown.Item>
          <Dropdown.Item as="button">TV's</Dropdown.Item>
        </DropdownButton>
        <InputGroup  className="mr-auto ml-auto col-sm-9 ">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
        <Form inline>
          <Button variant="outline-light">Entrar</Button>
        </Form>
      </Navbar>
      <div className="w-100 mb-0">
        <p style={{backgroundColor:"black", marginBottom:"0px", height:"50px" }}>Banner</p>
      </div>
        <Carrousel />
        <CarouselProdutos/>
    </div>
  );
}

export default MainPage;
