import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
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
  console.log(isLoaded);
  console.log(products)
  return (

    
    <Container style={{ margin: "auto" }}>
      {!isLoaded ? (
        <h1>Loading</h1>
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
