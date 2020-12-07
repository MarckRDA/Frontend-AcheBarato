import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carrousel from "./Carrousel";

function ProdutoEscolhido() {
  return (
    <Container className="ml-auto mr-auto">
      <Row>
        <Col xs={6}>
          <Carrousel/>
        </Col>
        <Col xs={6}>
          <h1>Titulo</h1>
        </Col>
      </Row>
      <h1>Hello</h1>

    </Container>
  );
}

export default ProdutoEscolhido;
