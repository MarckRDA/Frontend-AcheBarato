import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carrousel from "../../Components/CarouselMainPage/CarouselMainPage";
import CardListProduct from "../../Components/CardListProduct/CardListProduct";
import PriceAverage from '../../Components/PriceAverage/PriceAverage'
import TechnicalInformation from "../../Components/TecnicalInformation/TechnicalInformation";
import NavSuperior from '../../Components/MenuSearchBar/index';


function ProdutoEscolhido() {
  // const products = props.products;
  // const listProducts = products.map(({ ...products }, index) => (
  //   <CardListProduct
  //     key={index}
  //     productName={products.name}
  //     productPrice={products.price}
  //   />
  // ));

  return (
    <>
    <NavSuperior/>
    <Container className="ml-auto mr-auto">
      <Row>
        <Col xs={6}>
          <Carrousel />
        </Col>
        <Col xs={6} className="align-self-center">
          <h1>Iphone 7s bla bla</h1>
          <Button variant="primary">Link para loja</Button>
        </Col>
      </Row>
      {/* {listProducts} */}
      <br />
      <br />
      {/* <PriceAverage /> */}
      <br />
      <br />
      <TechnicalInformation
        specification={[{ exp1: [{ model: 1 }, { model2: 2 }] }, { exp2: [{ model: 1 }, { model2: 2 }] }, { exp2: [{ model: 1 }, { model2: 2 }] }]}
      />
    </Container>
    </>
  );
}

export default ProdutoEscolhido;
