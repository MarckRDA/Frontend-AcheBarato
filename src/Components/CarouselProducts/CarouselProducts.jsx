import React, { useState, useEffect } from "react";
import { Container} from "react-bootstrap";
import axios from "axios";
import CardTrendProduct from "../CardTrendProduct/CardTrendProduct";
import Carousel from "react-elastic-carousel";

function CarouselProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get(
        "https://localhost:5001/achebarato/products/trendproducts"
      );

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <Container style={{ margin: "auto" }}>
      <h1 className="h1">Trends em Computadores</h1>
      <Carousel itemsToShow={4}>
        {products.map((product) => {
          if (product.cathegory.name === "Computadores")
            return (
              <CardTrendProduct
                key={product.id_product}
                productName={product.name}
                productPrice={product.price}
                productThumbImage={product.thumbImgLink}
              />
            );
        })}
      </Carousel>
      <h1 className="h1">Trends em Celulares Nokia</h1>
      <Carousel itemsToShow={4}>
        {products.map((product) => {
          if (product.cathegory.name === "Celulares e Smartphones")
            return (
              <CardTrendProduct
                key={product.id_product}
                productName={product.name}
                productPrice={product.price}
                productThumbImage={product.thumbImgLink}
              />
            );
        })}
      </Carousel>
      <h1 className="h1">Trends em Consoles</h1>
      <Carousel itemsToShow={4}>
        {products.map((product) => {
          if (product.cathegory.name === "Consoles")
            return (
              <CardTrendProduct
                key={product.id_product}
                productName={product.name}
                productPrice={product.price}
                productThumbImage={product.thumbImgLink}
              />
            );
        })}
      </Carousel>
      <h1 className="h1">Trends em Microondas</h1>
      <Carousel itemsToShow={4}>
        {products.map((product) => {
          if (product.cathegory.name === "Microondas")
            return (
              <CardTrendProduct
                key={product.id_product}
                productName={product.name}
                productPrice={product.price}
                productThumbImage={product.thumbImgLink}
              />
            );
        })}
      </Carousel>
    </Container>
  );
}

export default CarouselProducts;
