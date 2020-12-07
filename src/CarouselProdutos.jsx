import React from "react";
import {
  Card,
  Button,
  CarouselItem,
  Carousel,
  Container,
  Row,
} from "react-bootstrap";

import l from "./logo.svg";

function CarouselProdutos() {
  const cards = [1, 1, 1, 1, 1, 1, 1].map((n) => (
    <CarouselItem key={n.toString()}>
      <Container >
        <Row className="ml-auto mr-auto mb-3">
          <Card style={{ width: "15rem", margin: "15px" }}>
            <Card.Img variant="top" src={l} />
            <Card.Body>
              <Card.Title>Produto f</Card.Title>
              <Card.Text>Product description</Card.Text>
              <Button variant="primary">Ver Produto</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "15rem", margin: "10px" }}>
            <Card.Img variant="top" src={l} />
            <Card.Body>
              <Card.Title>Produto y</Card.Title>
              <Card.Text>Product description</Card.Text>
              <Button variant="primary">Ver Produto</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem", margin: "10px" }}>
            <Card.Img variant="top" src={l} />
            <Card.Body>
              <Card.Title>Produto x</Card.Title>
              <Card.Text>Product description</Card.Text>
              <Button variant="primary">Ver Produto</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem", margin: "10px" }}>
            <Card.Img variant="top" src={l} />
            <Card.Body>
              <Card.Title>Product l</Card.Title>
              <Card.Text>Product description</Card.Text>
              <Button variant="primary">Ver Produto</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </CarouselItem>
  ));

  return (
    <Container style={{margin: "auto"}}>
      <h1>Ofertas de eletronicos</h1>
      <Carousel>{cards}</Carousel>
      <h1>Ofertas de Computadores</h1>
      <Carousel>{cards}</Carousel>
      <h1>Oferta em roupas</h1>
      <Carousel>{cards}</Carousel>
    </Container>
  );
}

export default CarouselProdutos;
