import React from "react";
import CardTrendProduct from "../CardTrendProduct/CardTrendProduct";
import { ListGroup, Container, Row } from "react-bootstrap";

function ProdutosPesquisados(props) {
  const productsSearched = props.products;
  const listProducts = productsSearched.map((productsSearched, index) => (
    <ListGroup.Item>
      <CardTrendProduct
        key={productsSearched.id_product}
        productName={productsSearched.name}
        productPrice={productsSearched.price}
        productThumbImage={productsSearched.thumbImgLink}
      />
    </ListGroup.Item>
  ));
  return (
    <Container className="search-product">
      <ListGroup variant="flush">
        <Row lg={4}>{listProducts}</Row>
      </ListGroup>
    </Container>
  );
}

export default ProdutosPesquisados;
