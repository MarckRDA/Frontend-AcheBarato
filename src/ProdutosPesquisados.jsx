import React from "react";
import { ListGroup, Card, Button, Container } from "react-bootstrap";

function ProdutosPesquisados() {
  return (
    <Container>
      <ListGroup variant="flush">
        <ListGroup horizontal>
          <ListGroup.Item>
            <Card style={{ width: "15rem", height: "15rem", margin: "10px" }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Produto f</Card.Title>
                <Card.Text>Product description</Card.Text>
                <Button variant="primary">Ver Produto</Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      </ListGroup>
    </Container>
  );
}

export default ProdutosPesquisados;
