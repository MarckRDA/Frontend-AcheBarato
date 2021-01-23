import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Accordion, Badge } from "react-bootstrap";

import { useParams } from "react-router-dom";
import CardListProduct from "../../Components/CardListProduct/CardListProduct";
import TechnicalInformation from "../../Components/TecnicalInformation/TechnicalInformation";
import NavSuperior from "../../Components/MenuSearchBar/index";
import axios from "axios";
import PriceCharts from "../../Components/PriceAverage/Charts/PriceCharts";
import CarouselPictureSelected from "../../Components/CarouselPictureSelected/CarouselPictureSelected";
import AlertPrice from "../../Components/AlertPrice/AlertPrice";

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

  const productRelatedPartOne = relatedProducts.slice(
    Math.max(relatedProducts.length - 5, 1)
  );

  return (
    <>
      <NavSuperior />
      <Container className="ml-auto mr-auto mt-3">
        {isLoaded && (
          <>
            <Row>
              {
                <>
                  <Col xs={6}>
                    <CarouselPictureSelected
                      pictures={productSelected.pictures}
                    />
                  </Col>
                  <Col
                    xs={6}
                    className="align-self-center justify-content-start"
                  >
                    <h1 className="h1">{productSelected.name}</h1>
                    <h3>R$ {productSelected.price}</h3>
                    <a href={productSelected.linkRedirectShop}>
                      <Button variant="primary">Link para loja</Button>
                    </a>
                  </Col>
                </>
              }
            </Row>
            <Row>
            <PriceCharts data={productSelected.historycalṔrices} />
            </Row>
            <br />
            <br />
            <TechnicalInformation
              productInformations={productSelected.descriptions}
            />
            <br />
            <br />
            <h1>Produtos relacionados</h1>
            {productRelatedPartOne.map((relatedProduct) => (
              <CardListProduct
                key={relatedProduct.id_product}
                productImg={relatedProduct.thumbImgLink}
                productName={relatedProduct.name}
                productId={relatedProduct.id_product}
                productPrice={relatedProduct.price}
                productLinkRedirec={relatedProduct.linkRedirectShop}
              />
            ))}
            <Accordion defaultActiveKey="1">
              {relatedProducts.map((relatedProduct) => (
                <Accordion.Collapse eventKey="0">
                  <CardListProduct
                    key={relatedProduct.id_product}
                    productImg={relatedProduct.thumbImgLink}
                    productId={relatedProduct.id_product}
                    productName={relatedProduct.name}
                    productPrice={relatedProduct.price}
                    productLinkRedirec={relatedProduct.linkRedirectShop}
                  />
                </Accordion.Collapse>
              ))}
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Badge variant="primary">Ver mais</Badge>{" "}
              </Accordion.Toggle>
            </Accordion>
          </>
        )}
      </Container>
    </>
  );
};

export default ProdutoEscolhido;
