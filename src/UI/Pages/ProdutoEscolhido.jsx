import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carrousel from "../../Components/CarouselMainPage/CarouselMainPage";
import { useParams } from "react-router-dom";
import CardListProduct from "../../Components/CardListProduct/CardListProduct";
import PriceAverage from "../../Components/PriceAverage/PriceAverage";
import TechnicalInformation from "../../Components/TecnicalInformation/TechnicalInformation";

import NavSuperior from "../../Components/MenuSearchBar/index";

import axios from "axios";
import CarouselPictureSelected from "../../Components/CarouselPictureSelected/CarouselPictureSelected";

const ProdutoEscolhido = () => {
  const [productSelected, setProductSelected] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    
    async function loadRelatedProducts() {
      await axios
        .all([
          axios.get(`https://localhost:5001/achebarato/products/${id}`),
          axios.get(
            `https://localhost:5001/achebarato/products/${id}/relatedproducts`
          ),
        ])
        .then(
          axios.spread((ps, rp) => {
            setProductSelected(ps.data);
            setRelatedProducts(rp.data);
          })
        );

      setIsLoaded(true);
    }

    loadRelatedProducts();
  }, []);


  return (
    <>
      <NavSuperior />
      <Container className="ml-auto mr-auto mt-3">
        <Row>
          {isLoaded && (
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
        <h1>Produtos relacionados</h1>
        {isLoaded &&
          relatedProducts.map((relatedProduct) => (
            <CardListProduct
              key={relatedProduct.id_product}
              productImg={relatedProduct.thumbImgLink}
              productName={relatedProduct.name}
              productPrice={relatedProduct.price}
            />
          ))}
        <br />
        <br />
        {/* <PriceAverage /> */}
        <br />
        <br />
        {isLoaded && <TechnicalInformation
          productInformations={productSelected.descriptions}
        />}
      </Container>
    </>
  );
};

export default ProdutoEscolhido;
