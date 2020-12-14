import React from "react";

import { ListGroup, Container } from "react-bootstrap";
import SearchResultProducts from "./Components/SearchResultProducts/SearchResultProducts";

//todo: terminar o controle de produtos 

function ProdutosPesquisados(props) {
  const productsSearched = props.products;
  const listProducts = productsSearched.map(
    ({ ...productsSearched }, index) => (
      <SearchResultProducts
        productDescription={productsSearched.name}
        productName={productsSearched.productDescription}
      />
    )
  );
  return (
    <Container className="">
      <ListGroup variant="flush">
        {listProducts}
      </ListGroup>
    </Container>
  );
}

export default ProdutosPesquisados;
