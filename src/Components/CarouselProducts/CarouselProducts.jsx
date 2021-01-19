import React, { useState, useEffect } from "react";
import { CarouselItem, Carousel, Container, Row } from "react-bootstrap";
import axios from "axios";
import CardTrendProduct from "../CardTrendProduct/CardTrendProduct";

function CarouselProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const response = await axios.get(
        "https://localhost:5001/achebarato/products/trendproducts"
      );

      setProducts(response.data);
    }

    loadBooks();
  }, []);

  let index = 0;
 
  const CardsTrendsProdutcs = products.map((product) => (
    <CardTrendProduct
      key={product.id_product}
      productName={product.name}
      productPrice={product.price}
      productThumbImage={product.thumbImgLink}
    />
  ));

  const cards = [1,1].map((n) => (
    <CarouselItem key={n.toString()}>
      <Container>
        <Row className="ml-auto mr-auto mb-3">
          {products.map((product) => {
           index = index  + 1;
            if (product.cathegory.name === "Computadores")
              return (
                <CardTrendProduct
                  key={product.id_product}
                  productName={product.name}
                  productPrice={product.price}
                  productThumbImage={product.thumbImgLink}
                />
              )
              ;
              
          })}
        </Row>
      </Container>
    </CarouselItem>
  ));

  return (
    <Container style={{ margin: "auto" }}>
      <h1>Ofertas de eletronicos</h1>
      <Carousel>{cards}</Carousel>
    </Container>
  );
}

export default CarouselProducts;
