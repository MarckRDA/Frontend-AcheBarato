import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carrousel from "../../Components/CarouselMainPage/CarouselMainPage";
import { useParams } from "react-router-dom";
import CardListProduct from "../../Components/CardListProduct/CardListProduct";
import PriceAverage from '../../Components/PriceAverage/PriceAverage'
import TechnicalInformation from "../../Components/TecnicalInformation/TechnicalInformation";
<<<<<<< HEAD
import NavSuperior from '../../Components/MenuSearchBar/index';
=======
<<<<<<< HEAD
import NavSuperior from "../../Components/MenuSearchBar/index";
import axios from "axios";
import CarouselPictureSelected from "../../Components/CarouselPictureSelected/CarouselPictureSelected";

const ProdutoEscolhido = () => {
  const [productSelected, setProductSelected] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoadedProductSelected, setIsLoadedProductSelected] = useState(false);
  const [isLoadedRelatedProduct, setIsLoadedRelatedProduct] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function loadProductSelected() {
      const response = await axios.get(
        `https://localhost:5001/achebarato/products/${id}`
      );
      setProductSelected(response.data);
      setIsLoadedProductSelected(true);
    }

    async function loadRelatedProducts() {
      const response = await axios.get(
        `https://localhost:50001/achebarato/products/${id}/relatedproducts`
      );
      setRelatedProducts(response.data);
      setIsLoadedRelatedProduct(true);
    }

    loadProductSelected();
    loadRelatedProducts();
  }, []);

  console.log(isLoadedRelatedProduct);
  console.log(isLoadedProductSelected)

  return (
    <>
      <NavSuperior />
      <Container className="ml-auto mr-auto mt-3">
        <Row>
          {isLoadedProductSelected && (
            <>
              <Col xs={6}>
                <CarouselPictureSelected pictures={productSelected.pictures} />
              </Col>
              <Col xs={6} className="align-self-center justify-content-start">
                <h1 className="h1">{productSelected.name}</h1>
                <h3>R$ {productSelected.price}</h3>
                <a href={productSelected.linkRedirectShop}>
                  <Button variant="primary">Link para loja</Button>
                </a>
              </Col>
            </>
          )}
        </Row>
        {isLoadedRelatedProduct &&
          relatedProducts.map((relatedProduct) => (
            <CardListProduct
              key={relatedProduct.id_product}
              productName={relatedProduct.name}
              productPrice={relatedProduct.price}
            />
          ))}
        <br />
        <br />
        {/* <PriceAverage /> */}
        <br />
        <br />
        <TechnicalInformation
          specification={[
            { exp1: [{ model: 1 }, { model2: 2 }] },
            { exp2: [{ model: 1 }, { model2: 2 }] },
            { exp2: [{ model: 1 }, { model2: 2 }] },
          ]}
        />
      </Container>
    </>
=======
>>>>>>> dbd16826035477b7f474b0eb6ec736122cd00965


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
<<<<<<< HEAD
    </>
=======
>>>>>>> 691cea27cf844eabb78ac7c7a032e3fccc6e07c6
>>>>>>> dbd16826035477b7f474b0eb6ec736122cd00965
  );
};

export default ProdutoEscolhido;
