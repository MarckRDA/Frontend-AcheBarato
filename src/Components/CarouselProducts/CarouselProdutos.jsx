import React from "react";
import {
  CarouselItem,
  Carousel,
  Container,
  Row,
} from "react-bootstrap";

import CardTrendProduct from "../CardTrendProduct/CardTrendProduct";

// ToDo: Fix dynamic carousel

function CarouselProdutos(props) {
  const productInformations = props.trendingProducts;

  const CardsTrendsProdutcs = productInformations.map(({ ...rest }, index) => (
    <CardTrendProduct
      key={index.toString()}
      productName={rest.name}
      productDescription={rest.description}
    />  
  ));

  const cards = [1, 1, 1, 1, 1, 1, 1].map((n) => (
    <CarouselItem key={n.toString()}>
      <Container>
        <Row className="ml-auto mr-auto mb-3">{CardsTrendsProdutcs}</Row>
      </Container>
    </CarouselItem>
  ));

  return (
    <Container style={{ margin: "auto" }}>
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
