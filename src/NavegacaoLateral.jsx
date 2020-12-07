import { Slider } from "@material-ui/core";
import { React, useState } from "react";
import {
  Button,
  Accordion,
  Col,
  Form,
  Nav,
  Badge,
} from "react-bootstrap";

function NavegacaoLateral() {
  const [range, setRange] = useState([0, 100]);

  function ShowBaloonValue(value) {
    return `${value}`;
  }

  function HandlerPrice(e, newValue) {
    setRange(newValue);
  }

  return (
    <Nav className="justify-content-start">
      <Nav.Item as={Col}>
        <h3>Categoria</h3>
        <Nav.Link>serei uma categoria</Nav.Link>
        <Nav.Link>serei uma categoria</Nav.Link>
        <Nav.Link>serei uma categoria</Nav.Link>
        <Nav.Link>serei uma categoria</Nav.Link>
        <Accordion defaultActiveKey="1">
          <Accordion.Collapse eventKey="0">
            <Nav.Link>serei uma categoria</Nav.Link>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="0">
            <Nav.Link>serei uma categoria</Nav.Link>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="0">
            <Nav.Link>serei uma categoria</Nav.Link>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="0">
            <Nav.Link>serei uma categoria</Nav.Link>
          </Accordion.Collapse>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <Badge variant="light">ver mais 4 categorias</Badge>
          </Accordion.Toggle>
        </Accordion>
      </Nav.Item>
      <Nav.Item as={Col}>
        <h3>Preço</h3>
        <Slider
          value={range}
          onChange={HandlerPrice}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={ShowBaloonValue}
        />
      </Nav.Item>
      <Nav.Item as={Col}>
        <h3>Lojas</h3>
        <Form>
          <Form.Group>
            <Form.Check type="checkbox" label="Casa e Vídeo" />
            <Form.Check type="checkbox" label="Casas Bahia" />
            <Form.Check type="checkbox" label="Seu quincas" />
            <Form.Check type="checkbox" label="Birosca" />
          </Form.Group>
        </Form>
      </Nav.Item>
      <Nav.Item as={Col}>
        <h3>Faixa de Disconto</h3>
        <Form.Group>
          <Form.Check type="checkbox" label="20 %" />
          <Form.Check type="checkbox" label="50 %" />
        </Form.Group>
      </Nav.Item>
    </Nav>
  );
}

export default NavegacaoLateral;
