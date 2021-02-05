import React, { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import axios from "axios";
import ReactLoading from "react-loading";
import CardTrendProduct from "../CardTrendProduct/CardTrendProduct";
import Carousel from "react-elastic-carousel";

function CarouselProducts() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get(
        "https://localhost:5001/achebarato/products/trendproducts"
      );

      setProducts(response.data);
    }
    setIsLoaded(true);
    loadProducts();
  }, []);

  return (
    <Container style={{ margin: "auto" }}>
      {!isLoaded ? (
        <Col
          xl={10}
          xs={10}
          style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
        >
          <ReactLoading type="balls" color="#ff6633" height={200} width={200} />
        </Col>
      ) : (
        <>
          <h1 className="h1">Trends em HDs e SSDs</h1>
          <Carousel itemsToShow={4}>
            {products.map((product) => {
              if (product.cathegory.name === "HDs e SSDs")
                return (
                  <CardTrendProduct
                    key={product.id_product}
                    productName={product.name}
                    productPrice={product.price}
                    productThumbImage={product.thumbImgLink}
                    productId={product.id_product}
                  />
                );
            })}
          </Carousel>
          <h1 className="h1">Trends em Livros</h1>
          <Carousel itemsToShow={4}>
            {products.map((product) => {
              if (product.cathegory.name === "Livros")
                return (
                  <CardTrendProduct
                    key={product.id_product}
                    productName={product.name}
                    productPrice={product.price}
                    productThumbImage={product.thumbImgLink}
                    productId={product.id_product}
                  />
                );
            })}
          </Carousel>
          <h1 className="h1">Trends em Cabos e Adaptadores</h1>
          <Carousel itemsToShow={4}>
            {products.map((product) => {
              if (product.cathegory.name === "Cabos e Adaptadores")
                return (
                  <CardTrendProduct
                    key={product.id_product}
                    productName={product.name}
                    productPrice={product.price}
                    productThumbImage={product.thumbImgLink}
                    productId={product.id_product}
                  />
                );
            })}
          </Carousel>
          <h1 className="h1">Trends em Ar Condicionado</h1>
          <Carousel itemsToShow={4}>
            {products.map((product) => {
              if (product.cathegory.name === "Ar Condicionado")
                return (
                  <CardTrendProduct
                    key={product.id_product}
                    productName={product.name}
                    productPrice={product.price}
                    productThumbImage={product.thumbImgLink}
                    productId={product.id_product}
                  />
                );
            })}
          </Carousel>{" "}
        </>
      )}
    </Container>
  );
}

export default CarouselProducts;
