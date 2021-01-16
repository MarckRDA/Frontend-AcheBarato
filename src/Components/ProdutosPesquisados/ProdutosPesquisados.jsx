import React from "react";

import { ListGroup, Container, Row } from "react-bootstrap";
import SearchResultProducts from "../SearchResultProducts/SearchResultProducts";


function ProdutosPesquisados(props) {
  const productsSearched = props.products;
  const listProducts = productsSearched.map(
    ({ ...productsSearched }, index) => (
      <SearchResultProducts
        key={index}
        productDescription={productsSearched.name}
        productName={productsSearched.productDescription}
      />
    )
  );
  return (
    <Container className="search-product">
      <ListGroup variant="flush">
      <Row lg={4}>
        {listProducts}
        </Row>
      </ListGroup>
    </Container>
  );
}

export default ProdutosPesquisados;
